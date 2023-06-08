import { GetServerSideProps, NextPage } from "next";
import MainMapBoard from "@components/Board/MainMapBoard";
import UserSubBoard from "@components/Board/UserSubBoard";
import JobCard from "@components/Card/JobCard";
import UserBoard from "@components/Board/UserBoard";
import ChatBox from "@components/Box/ChatBox";
import ScoreBoard from "@components/Board/ScoreBoard";
import FacilityCard from "@components/Card/FacilityCard";
import { useEffect, useState } from "react";
import { IPlayData } from "@ITypes/play";
import { connectSocket } from "@utils/socket";
import { useRecoilState } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";
import { playDataInit } from "@constants/demoData";
import { changeValue } from "@utils/util";

const Play = ({ roomId }: { roomId: number }) => {
  const [playData, setPlayData] = useRecoilState<IPlayData>(gamePlayData);
  console.log("play data", playData);
  const [playSocket, setPlaySocket] = useState<WebSocket>();
  const [chatSocket, setChatSocket] = useState<WebSocket>();

  useEffect((message?: any) => {
    // socket
    const client = connectSocket("/play/", roomId);
    setPlaySocket(() => client);
    const chatting = connectSocket("/chat/", roomId);
    setChatSocket(() => chatting);

    client.onmessage = (message) => {
      const serverMsg = JSON.parse(message.data);
      console.log("data", serverMsg);

      /* server msg handling */
      // msgType - 0: error, 1: sync, 2: change
      let msgType: number;
      !serverMsg?.is_success
        ? (msgType = 0)
        : serverMsg?.data.type === "sync"
        ? (msgType = 1)
        : (msgType = 2);

      switch (msgType) {
        // error
        case 0:
          alert(`error msg : \n${serverMsg?.error}`);
          break;

        // sync data
        case 1:
          console.log("sync data");
          setPlayData(() => serverMsg.data.result);
          break;

        // change data
        case 2:
          const changesData = serverMsg.data.result;

          console.log("changesData", changesData);
          (async () => {
            await setPlayData((pre: IPlayData) => {
              return changeValue(pre, changesData) as IPlayData;
            });
          })();

          console.log("changeData", playData);

          break;
      }
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

  if (chatSocket === undefined || playSocket === undefined)
    return <div>loading...</div>;

  return (
    <div className="relative">
      <div className="flex gap-[20px] bg-[#b3cd31]">
        <UserSubBoard direction={"left"} owner={1} />
        <div className="flex flex-col items-center bg-[#b3cd31]">
          <UserSubBoard direction={"top"} owner={2} />

          {/* Main Map*/}
          <MainMapBoard client={playSocket} />

          {/* User sub Board*/}
          <div className="flex flex-row justify-between w-full relative">
            <ScoreBoard />
            <UserSubBoard direction={"bottom"} owner={0} />
            <div className="flex gap-[15px]">
              <FacilityCard owner={0} />
              <JobCard />
            </div>
            <div className="absolute right-0 -top-11">
              <ChatBox userId={roomId} client={chatSocket} />
            </div>
          </div>
        </div>
        <UserSubBoard direction={"right"} owner={3} />
      </div>

      {/* User main Board*/}
      <div className="absolute left-[338.5px]">
        <UserBoard owner={0} type="my" />
      </div>
    </div>
  );
};

export default Play;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // todo : test용으로 roomId 3으로 작성

  return {
    // props: { roomId: context.query.roomId },
    props: { roomId: 3 },
  };
};
