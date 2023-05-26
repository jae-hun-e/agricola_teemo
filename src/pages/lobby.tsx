import { NextPage } from "next";
import WaitingRoomList from "@components/Socket/WaitingRoomList";
import CreateRoom from "@components/Socket/CreateRoom";
import { useState } from "react";

const Lobby: NextPage = () => {
  const [viewRoom, setViewRoom] = useState<number>(1);

  const createRoom = () => {
    setViewRoom(0);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] mt-[40px]">
      <div className="flex gap-[10px]">
        <WaitingRoomList changeViewRoom={setViewRoom} />
        <CreateRoom roomId={viewRoom} />
      </div>
      <div
        className="w-[200px] h-[50px] rounded-full text-center bg-demo hover:bg-demo2 cursor-pointer flex justify-center items-center"
        onClick={createRoom}
      >
        Create Room
      </div>
    </div>
  );
};

export default Lobby;
