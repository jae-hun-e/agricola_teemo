import { NextPage } from "next";
import MainMapBoard from "@components/Board/MainMapBoard";
import UserSubBoard from "@components/Board/UserSubBoard";
import JobCard from "@components/Card/JobCard";
import UserBoard from "@components/Board/UserBoard";
import ChatBox from "@components/Box/ChatBox";
import ScoreBoard from "@components/Board/ScoreBoard";
import FacilityCard from "@components/Card/FacilityCard";
import { playDataInit } from "../constants/demoData";
import { useEffect, useState } from "react";
import { IPlayData } from "@ITypes/play";
import { connectSocket } from "@utils/socket";

const Play: NextPage = () => {
  const [playData, setPlayData] = useState<IPlayData>(playDataInit);
  const [chatSocket, setChatSocket] = useState<WebSocket>();
  // console.log("play data", playData);
  const {
    first,
    turn,
    round,
    phase,
    players,
    actions,
    base_cards,
    round_cards,
    common_resources,
  } = playData;
  const [userId, setUserId] = useState(3);

  useEffect(() => {
    // socket
    const client = connectSocket("/play/", userId);
    const chatting = connectSocket("/chat/3/", userId);
    setChatSocket(chatting);
    client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      setPlayData(data);
    };

    return () => {
      client.onclose = () => {
        console.log("play WebSocket Client Closed");
      };
      chatting.onclose = () => {
        console.log("chatting WebSocket Client Closed");
      };
    };
  }, []);

  if (chatSocket === undefined) return <div>loading...</div>;

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
              <ChatBox userId={userId} client={chatSocket} />
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
