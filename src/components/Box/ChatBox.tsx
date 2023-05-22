import { useRef, useState } from "react";

const ChatBox = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const Chat = useRef<HTMLDivElement>(null);
  const toggleChatBot = () => {
    setIsChatOpen(!isChatOpen);
    Chat.current?.classList.toggle("-translate-y-[150px]");
  };

  return (
    <div
      ref={Chat}
      className="w-[340px] h-[26px] bg-demo2 cursor-pointer relative flex items-center
      transition duration-500 ease-in-out"
      onClick={toggleChatBot}
    >
      <div className="absolute left-2 w-[28px] h-[26px] bg-demo">Icon</div>
      <div className="absolute left-14">Chat</div>
      <div className="absolute right-2 w-[16px] h-[16px] bg-demo "></div>
      {isChatOpen && (
        <div className="absolute top-[24px] bg-demo w-full h-[150px]">
          <div>채팅내용</div>
        </div>
      )}
    </div>
  );
};
export default ChatBox;
