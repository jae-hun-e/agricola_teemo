import { useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface IMsg {
  idx: number;
  user: number;
  msg: string;
}

interface Props {
  userId: number;
  client: WebSocket;
}

const ChatBox = ({ userId, client }: Props) => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [allChatMsg, setAllChatMsg] = useState<IMsg[]>([]);
  const [lastViewChatIdx, setLastViewChatIdx] = useState<number[]>([0, 0]);
  const Chat = useRef<HTMLDivElement>(null);
  const chatView = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, reset } = useForm();

  // 채팅창 열기
  const toggleChatBot = () => {
    // 채팅창 닫을 때 정보 저장
    if (isChatOpen) {
      setLastViewChatIdx([
        allChatMsg[allChatMsg.length - 1]?.idx,
        chatView.current ? chatView.current.scrollHeight : 0,
      ]);

      setAllChatMsg((pre: IMsg[]) => {
        return [
          ...[...pre].filter((chat) => chat.user !== 0),
          { idx: 0, user: 0, msg: "====여기까지 읽었습니다.====" },
        ];
      });
    } else {
    }
    setIsChatOpen(!isChatOpen);
    Chat.current?.classList.toggle("-translate-y-[150px]");
  };

  // 메세지 보내기
  const onSubmit = (data: FieldValues) => {
    if (data.msg === "") {
      alert("메세지를 입력해주세요!");
      return;
    }
    client?.send(
      JSON.stringify({
        // command: "sync",
        command: "message",
        user_id: userId,
        message: data.msg,
      })
    );
    reset({ msg: "" });
  };

  // 스크롤 맨 아래로 내리기(열려있을때)
  useEffect(() => {
    if (chatView.current)
      chatView.current.scrollTop = chatView.current?.scrollHeight;
  }, [allChatMsg]);

  // 채팅창 열릴 때 스크롤 위치
  useEffect(() => {
    if (chatView.current) chatView.current.scrollTop = lastViewChatIdx[1];
  }, [isChatOpen]);

  // 메세지 받기
  useEffect(() => {
    client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      const newChat: IMsg = {
        idx: data.index,
        user: data.user_id,
        msg: data.message,
      };
      setAllChatMsg((pre: IMsg[]) => {
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
      className="w-[340px] h-[30px] bg-yellow-400 cursor-pointer relative flex items-center
      transition duration-500 ease-in-out"
      onClick={!isChatOpen ? toggleChatBot : () => {}}
    >
      <div className="absolute left-2 w-[28px] h-[26px] bg-yellow-100 rounded-xl text-center">
        🤫
      </div>
      <div className="absolute left-14">Chat</div>
      <div
        className="absolute right-2 w-[25px] h-[25px] bg-blue-300 rounded-xl flex justify-center items-center"
        onClick={isChatOpen ? toggleChatBot : () => {}}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          {!isChatOpen &&
            allChatMsg[allChatMsg.length - 1]?.idx > lastViewChatIdx[0] && (
              <div className="text-xs font-bold text-white bg-red-500 w-[20px] h-[20px] absolute -top-[10px] -right-[5px] rounded-full flex justify-center items-center">
                {allChatMsg[allChatMsg.length - 1]?.idx - lastViewChatIdx[0]}
              </div>
            )}
          <p>{isChatOpen ? "X" : "O"}</p>
        </div>
      </div>
      {isChatOpen && (
        <div className="absolute top-[30px] w-full h-[150px] pb-[20px]">
          <div
            className="relative w-full h-full bg-demo overflow-y-scroll"
            ref={chatView}
          >
            {allChatMsg.map(({ user, msg }, idx) => (
              <div key={idx} className="w-full h-[25px] mt-[5px] mb-[5px]">
                {user === 0 ? (
                  <div className="w-full flex justify-center ">
                    <p className="bg-yellow-300 px-[15px] rounded-xl">{msg}</p>
                  </div>
                ) : user === userId ? (
                  <div className="w-full flex justify-end ">
                    <p className="bg-yellow-300 px-[15px] rounded-l-xl">
                      {msg}
                    </p>
                  </div>
                ) : (
                  <div className="w-full flex justify-start gap-[5px]">
                    <p className="bg-gray-100 rounded-full w-[20px] h-[20px] flex justify-center items-center">
                      {user}
                    </p>
                    <p className="bg-gray-200 px-[15px] rounded-r-xl">{msg}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-between absolute bottom-0 w-full h-[20px] bg-amber-200 p-0 m-0"
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
              <p className="text-yellow-200">전송</p>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default ChatBox;
