import { useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface IMsg {
  user: number;
  msg: string;
}

interface Props {
  userId: number;
}

const baseURL = "ws://127.0.0.1:8000/ws/v1";
const namespace = "/chat/3/";

const ChatBox = ({ userId }: Props) => {
  const client = new WebSocket(baseURL + namespace + userId);
  useEffect(() => {
    return () => {
      client.onclose = () => {
        console.log("WebSocket Client Closed");
      };
    };
  }, [userId]);

  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [allChatMsg, setAllChatMsg] = useState<IMsg[]>([]);

  const Chat = useRef<HTMLDivElement>(null);
  const chatView = useRef<HTMLDivElement>(null);
  const toggleChatBot = () => {
    setIsChatOpen(!isChatOpen);
    Chat.current?.classList.toggle("-translate-y-[150px]");
  };

  const { register, handleSubmit, reset, getFieldState } = useForm();

  const onSubmit = (data: FieldValues) => {
    if (data.msg === "") {
      alert("메세지를 입력해주세요!");
      return;
    }

    // 메세지 보내기

    client.send(
      JSON.stringify({
        // command: "sync",
        command: "message",
        message: data.msg,
      })
    );
    reset({ msg: "" });
  };

  // 스크롤 맨 아래로 내리기
  const scrollToBottom = () => {
    if (chatView.current)
      chatView.current.scrollTop = chatView.current?.scrollHeight;
  };
  useEffect(() => {
    scrollToBottom();
  }, [allChatMsg]);

  // 메세지 받기
  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected : ", namespace, userId);
    };

    console.log("======================rerender======================");
    client.onmessage = (message) => {
      const data = JSON.parse(message.data).data;
      const newChat = {
        user: data.user,
        msg: data.message,
      };
      setAllChatMsg((pre) => {
        return [...pre, newChat];
      });
    };

    return () => {
      client.onclose = () => {
        console.log("WebSocket Client Closed");
      };
    };
  }, []);

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
        <div className="absolute top-[24px] w-full h-[150px] pb-[20px]">
          <div
            className="relative w-full h-full bg-demo overflow-y-scroll"
            ref={chatView}
          >
            {allChatMsg.map(({ user, msg }, idx) => (
              <div key={idx} className="w-full h-[20px]">
                {user === userId ? (
                  <div className="w-full flex justify-end">
                    <p>
                      {msg}:{user}유저
                    </p>
                  </div>
                ) : (
                  <div className="w-full flex justify-start">
                    <p>
                      {user}유저:{msg}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <form
            onSubmit={() => false}
            className="flex justify-between absolute bottom-0 w-full h-[20px] bg-amber-200 p-0 m-0"
          >
            <input
              type="text"
              {...register("msg")}
              className="bg-amber-200  w-[calc(100%-50px)] h-full pr-[50px]"
            />
            <button
              type="button"
              className="w-[50px] h-full bg-blue-500 rounded-l-3xl absolute right-0 flex justify-center items-center"
              onClick={handleSubmit(onSubmit)}
            >
              <p>c</p>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default ChatBox;
