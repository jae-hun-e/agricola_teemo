import { NextPage } from "next";
import WaitingRoomList from "@components/Socket/WaitingRoomList";
import CreateRoom from "@components/Socket/CreateRoom";
import { useEffect, useState } from "react";
import { effect } from "zod";
import { Simulate } from "react-dom/test-utils";
import input = Simulate.input;
import { FieldValues, useForm } from "react-hook-form";

const Lobby: NextPage = () => {
  const [viewRoom, setViewRoom] = useState<number>(1);
  const [userId, setUserId] = useState(1);
  const [roomList, setRoomList] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const createRoom = () => {
    setViewRoom(0);
  };

  const baseURL = "ws://127.0.0.1:8000/ws/v1";
  const namespace = "/lobby/";
  const client = new WebSocket(baseURL + namespace + userId);
  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected : ", namespace, userId);
    };
    client.onmessage = (message) => {
      // console.log(message);
      setRoomList(JSON.parse(message.data));
    };
    return () => {
      client.onclose = () => {
        console.log("WebSocket Client Closed");
      };
    };
  }, [userId]);

  const onsubmit = (data: FieldValues) => {
    if (data.testId === "") return;
    setUserId(data.testId);
    reset({ testId: "" });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[20px] mt-[40px]">
      <div className="flex gap-[10px]">
        <WaitingRoomList
          changeViewRoom={setViewRoom}
          userId={userId}
          roomList={roomList}
        />
        <CreateRoom roomId={viewRoom} userId={userId} />
      </div>
      <div
        className="w-[200px] h-[50px] rounded-full text-center bg-demo hover:bg-demo2 cursor-pointer flex justify-center items-center"
        onClick={createRoom}
      >
        Create Room
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input
          type="text"
          className="w-20 h-5 bg-demo"
          {...register("testId")}
        />
        <button type="submit">demo</button>
      </form>
    </div>
  );
};

export default Lobby;
