import { NextPage } from "next";
import MainMapBoard from "@components/Board/MainMapBoard";
import UserSubBoard from "@components/Board/UserSubBoard";
import JobCard from "@components/Card/JobCard";
import UserBoard from "@components/Board/UserBoard";
import ChatBox from "@components/Box/ChatBox";
import ScoreBoard from "@components/Board/ScoreBoard";
import MyFacilityCard from "@components/Card/MyFacilityCard";

const Play: NextPage = () => {
  return (
    <div className="relative">
      <div className="flex gap-[20px]">
        <UserSubBoard direction={"left"} />
        <div className="flex flex-col items-center bg-[#fafafa]">
          <UserSubBoard direction={"top"} />
          <MainMapBoard />
          <div className="flex flex-row justify-between w-full relative">
            <ScoreBoard />
            <UserSubBoard direction={"bottom"} />
            <div className="flex gap-[15px]">
              <MyFacilityCard />
              <JobCard />
            </div>
            <div className="absolute right-0 -top-11">
              <ChatBox />
            </div>
          </div>
        </div>
        <UserSubBoard direction={"right"} />
      </div>
      <div className="absolute left-[338.5px]">
        <UserBoard owner="my" />
      </div>
    </div>
  );
};

export default Play;
