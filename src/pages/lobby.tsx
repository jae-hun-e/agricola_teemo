import { NextPage } from "next";
import WaitingRoomList from "@components/Socket/WaitingRoomList";
import CreateRoom from "@components/Socket/CreateRoom";
import { useEffect, useState } from "react";
import DetailRoom from "@components/Socket/DetailRoom";
import { connectSocket } from "@apis/socket";
import { useRecoilValue } from "recoil";
import { userInfo } from "@atom/auth";
import { IDetailRoom, IRoomList } from "@ITypes/lobby";

const Lobby: NextPage = () => {
  const [detailData, setDetailData] = useState<IDetailRoom>();
  const [openCreateRoom, setOpenCreateRoom] = useState<boolean>(false);
  const { userId } = useRecoilValue(userInfo);
  const [roomList, setRoomList] = useState<IRoomList[]>([]);
  const [client, setClient] = useState<WebSocket>();

  useEffect(() => {
    //socket
    const client = connectSocket("/lobby/");
    setClient(client);

    client.onmessage = (message) => {
      // console.log("data", message);
      console.log("data", JSON.parse(message.data));

      let serverMsg = JSON.parse(message.data);

      // msg Type - 0:lobby, 1:watch, 2:join,exit ,4:start
      let msgType: number;
      !serverMsg?.is_success
        ? (msgType = 0)
        : serverMsg?.data.type === "lobby"
        ? (msgType = 1)
        : serverMsg?.data.type === "room"
        ? (msgType = 2)
        : (msgType = 3);

      switch (msgType) {
        // error
        case 0:
          alert(`error msg : \n${serverMsg?.error}`);
          break;

        // lobby data
        case 1:
          const { result: roomList } = serverMsg.data;
          roomList.length !== 0 &&
            // 내가 만든 방 상단으로 올리기
            setRoomList(() => {
              const myCreateRoom = roomList.find(
                (room: IRoomList) => room.host === userId
              );
              return myCreateRoom
                ? [
                    myCreateRoom,
                    ...roomList.filter(
                      (room: IRoomList) => room.host !== userId
                    ),
                  ]
                : roomList;
            });

          break;

        // room data
        case 2:
          const { result: room } = serverMsg.data;
          setDetailData(room);
          break;

        // start data
        case 3:
          const {
            result: { participants },
          } = serverMsg.data;
          console.log("start data", participants);
          // setPlayerData(participants);
          break;
      }
    };

    return () => {
      client.onclose = () => {
        console.log("WebSocket Client Closed");
      };
    };
  }, []);

  // create room toggle
  const createRoom = () => {
    // 내가 만든 방 있으면 create room 불가

    setOpenCreateRoom(!openCreateRoom);
  };

  return (
    <div className="w-[1260px] h-[750px] bg-[url('/images/lobby/bg3.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-[20px]">
      <div className="flex gap-[10px]">
        <WaitingRoomList
          socket={client}
          roomList={roomList}
          userId={userId}
          changeDeTailRoom={setDetailData}
        />
        {openCreateRoom ? (
          <CreateRoom
            socket={client}
            setOpenCreateRoom={setOpenCreateRoom}
            userId={userId}
            roomList={roomList}
          />
        ) : (
          <DetailRoom userId={userId} socket={client} detailData={detailData} />
        )}
      </div>
      {!roomList.find((room: IRoomList) => room.host === userId) && (
        <div
          className="w-[200px] h-[50px] rounded-full text-center bg-demo hover:bg-demo2 cursor-pointer flex justify-center items-center"
          onClick={createRoom}
        >
          {openCreateRoom ? "Detail Room" : "Create Room"}
        </div>
      )}
    </div>
  );
};

export default Lobby;
