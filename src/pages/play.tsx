import { NextPage } from "next";
import MainMapBoard from "@components/Board/MainMapBoard";
import UserSubBoard from "@components/Board/UserSubBoard";
import JobCard from "@components/Card/JobCard";
import UserBoard from "@components/Board/UserBoard";
import ChatBox from "@components/Box/ChatBox";
import ScoreBoard from "@components/Board/ScoreBoard";
import FacilityCard from "@components/Card/FacilityCard";
import { playData } from "../constants/demoData";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { Simulate } from "react-dom/test-utils";
import input = Simulate.input;

const Play: NextPage = () => {
  const { turn, round, phase, action_on_round, common_resources, players } =
    playData;

  const { register, handleSubmit, reset } = useForm();
  const [userId, setUserId] = useState(1);
  const onSubmit = (data: FieldValues) => {
    if (data.testId === "") return;
    setUserId(data.testId);
    reset({ testId: "" });
  };

  return (
    <div className="relative">
      <div className="flex gap-[20px]">
        <UserSubBoard direction={"left"} owner={players[1]} num={2} />
        <div className="flex flex-col items-center bg-[#fafafa]">
          <UserSubBoard direction={"top"} owner={players[2]} num={3} />

          {/* Main Map*/}
          <MainMapBoard />

          {/* User sub Board*/}
          <div className="flex flex-row justify-between w-full relative">
            <ScoreBoard />
            <UserSubBoard direction={"bottom"} owner={players[0]} num={1} />
            <div className="flex gap-[15px]">
              <FacilityCard owner={1} />
              <JobCard />
            </div>
            <div className="absolute right-0 -top-11">
              {/*TODO test용도*/}
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  {...register("testId")}
                  className="bg-demo"
                />
                <button type="submit">dev</button>
              </form>
              <ChatBox userId={userId} />
            </div>
          </div>
        </div>
        <UserSubBoard direction={"right"} owner={players[3]} num={4} />
      </div>

      {/* User main Board*/}
      <div className="absolute left-[338.5px]">
        <UserBoard owner={players[0]} />
      </div>
    </div>
  );
};

export default Play;
