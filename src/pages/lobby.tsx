import { NextPage } from "next";
import WaitingRoomList from "@components/Socket/WaitingRoomList";
import CreateRoom from "@components/Socket/CreateRoom";

const Lobby: NextPage = () => {
  return (
    <div className="flex justify-center items-center gap-[10px] mt-[40px]">
      <WaitingRoomList />
      <CreateRoom />
    </div>
  );
};

export default Lobby;
