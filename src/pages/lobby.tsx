import { GetServerSideProps, NextPage } from "next";
import WaitingRoomList, { IRoomList } from "@components/Socket/WaitingRoomList";
import CreateRoom, { IRoom } from "@components/Socket/CreateRoom";
import { useEffect, useState } from "react";
import { Simulate } from "react-dom/test-utils";
import input = Simulate.input;
import { FieldValues, useForm } from "react-hook-form";
import DetailRoom from "@components/Socket/DetailRoom";

const Lobby: NextPage = () => {
  const [viewRoom, setViewRoom] = useState<number>(1);
  const [openCreateRoom, setOpenCreateRoom] = useState<boolean>(false);
  const [userId, setUserId] = useState(3);
  const [roomList, setRoomList] = useState<IRoomList[]>([]);
  const { register, handleSubmit, reset } = useForm();

  const createRoom = () => {
    setOpenCreateRoom(!openCreateRoom);
  };

  //socket
  const baseURL = "ws://127.0.0.1:8000/ws/v1";
  const namespace = "/lobby/";
  const client = new WebSocket(baseURL + namespace + userId);

  useEffect(() => {
    client.onopen = () => {
      console.log("roomList Connected : ", client, namespace, userId);
    };
    client.onmessage = (message) => {
      // 내가 만든 방 상단으로 올리기
      setRoomList(() => {
        let list = JSON.parse(message.data);
        const myCreateRoom = list.find(
          (room: IRoomList) => room.host === userId
        );
        return myCreateRoom
          ? [
              myCreateRoom,
              ...list.filter((room: IRoomList) => room.host !== userId),
            ]
          : list;
      });
    };

    return () => {
      client.onclose = () => {
        console.log("WebSocket Client Closed");
      };
    };
  }, []);

  const onsubmit = (data: FieldValues) => {
    if (data.testId === "") return;
    setUserId(data.testId);
    reset({ testId: "" });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[20px] mt-[40px]">
      <div className="flex gap-[10px]">
        <WaitingRoomList
          roomList={roomList}
          userId={userId}
          changeViewRoom={setViewRoom}
        />
        {openCreateRoom ? (
          <CreateRoom
            socket={client}
            setOpenCreateRoom={setOpenCreateRoom}
            userId={userId}
            roomList={roomList}
            changeViewRoom={setViewRoom}
          />
        ) : (
          <DetailRoom userId={userId} roomId={viewRoom} />
        )}
      </div>
      <div
        className="w-[200px] h-[50px] rounded-full text-center bg-demo hover:bg-demo2 cursor-pointer flex justify-center items-center"
        onClick={createRoom}
      >
        {openCreateRoom ? "Detail Room" : "Create Room"}
      </div>
    </div>
  );
};

export default Lobby;
