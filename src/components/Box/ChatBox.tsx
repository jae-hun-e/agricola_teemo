import { useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { connectSocket } from "../../hooks/useConnectSocket";

interface IMsg {
  user: number;
  msg: string;
}

interface Props {
  userId: number;
}
const ChatBox = ({ userId }: Props) => {
  const baseURL = "ws://127.0.0.1:8000/ws/v1";
  const namespace = "/chat/3/";
  const client = new WebSocket(baseURL + namespace + userId);
  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected : ", namespace, userId);
    };

    return () => {
      client.onclose = () => {
        console.log("WebSocket Client Closed");
      };
    };
  }, [userId]);

  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [allChatMsg, setAllChatMsg] = useState<IMsg[]>([]);
  const Chat = useRef<HTMLDivElement>(null);
  const toggleChatBot = () => {
    setIsChatOpen(!isChatOpen);
    Chat.current?.classList.toggle("-translate-y-[150px]");
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: FieldValues) => {
    if (data.msg === "") {
      alert("메세지를 입력해주세요!");
      return;
    }
    const newChat = {
      user: userId,
      msg: data.msg,
    };

    client.send(
      JSON.stringify({
        // command: "sync",
        command: "message",
        message: data.msg,
      })
    );

    client.onmessage = (message) => {
      console.log(message);

      const data = JSON.parse(message.data).data;
      const newChat = {
        user: data.user,
        msg: data.message,
      };
      console.log(data, newChat);
      setAllChatMsg((allChatMsg) => [...allChatMsg, newChat]);
    };

    reset({ msg: "" });
  };

  return (
    <div
      ref={Chat}
      className="w-[340px] h-[26px] bg-demo2 cursor-pointer relative flex items-center
      transition duration-500 ease-in-out"
      onClick={!isChatOpen ? toggleChatBot : () => {}}
    >
      <div className="absolute left-2 w-[28px] h-[26px] bg-demo">Icon</div>
      <div className="absolute left-14">Chat</div>
      <div
        className="absolute right-2 w-[16px] h-[16px] bg-demo flex justify-center items-center"
        onClick={isChatOpen ? toggleChatBot : () => {}}
      >
        {isChatOpen ? "X" : "O"}
      </div>
      {isChatOpen && (
        <div className="absolute top-[24px] w-full h-[150px]">
          <div className="relative w-full h-full bg-demo">
            {allChatMsg.map(({ user, msg }, idx) => (
              <div key={idx}>
                {user}: {msg}
              </div>
            ))}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-between absolute bottom-0 w-full h-[20px] bg-amber-200 "
            >
              <input
                type="text"
                {...register("msg")}
                className="bg-amber-200  w-[calc(100%-50px)] h-full pr-[50px]"
              />
              <button
                type="submit"
                className="w-[50px] h-full bg-blue-500 rounded-l-3xl absolute right-0 flex justify-center items-center"
              >
                <p>c</p>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default ChatBox;
