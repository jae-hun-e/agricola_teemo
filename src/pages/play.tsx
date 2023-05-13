import { NextPage } from "next";
import MainMapBoard from "@components/Board/MainMapBoard";
import UserSubBoard from "@components/Board/UserSubBoard";

const Play: NextPage = () => {
  return (
    <div className="flex gap-[20px]">
      <UserSubBoard direction={"left"} />
      <div className="flex flex-col items-center bg-[#fafafa]">
        <UserSubBoard direction={"top"} />
        <MainMapBoard />
        <UserSubBoard direction={"bottom"} />
      </div>
      <UserSubBoard direction={"right"} />
    </div>
  );
};

export default Play;
