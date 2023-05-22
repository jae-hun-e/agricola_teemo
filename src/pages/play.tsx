import { NextPage } from "next";
import MainMapBoard from "@components/Board/MainMapBoard";
import UserSubBoard from "@components/Board/UserSubBoard";
import ModalButton from "@components/Button/ModalButton";
import JobCard from "@components/Card/JobCard";
import UserBoard from "@components/Board/UserBoard";
import ChatBox from "@components/Box/ChatBox";

const Play: NextPage = () => {
  return (
    <div className="relative">
      <div className="flex gap-[20px]">
        <UserSubBoard direction={"left"} />
        <div className="flex flex-col items-center bg-[#fafafa]">
          <UserSubBoard direction={"top"} />
          <MainMapBoard />
          <div className="flex flex-row justify-between w-full relative">
            <ModalButton
              name="점수표"
              layoutCSS="bg-demo h-[80px] w-[80px] flex justify-center"
            >
              <div>점수 계산 방법 설명</div>
            </ModalButton>
            <UserSubBoard direction={"bottom"} />
            <JobCard />
            <div className="absolute right-0 -top-11">
              <ChatBox />
            </div>
          </div>
        </div>
        <UserSubBoard direction={"right"} />
      </div>
      <div className="absolute left-[386px]">
        <UserBoard />
      </div>
    </div>
  );
};

export default Play;
