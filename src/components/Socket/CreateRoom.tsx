import { useState } from "react";

const CreateRoom = () => {
  const [members, setMembers] = useState<string[]>([
    "user1",
    "user2",
    "user3",
    "user4",
  ]);
  return (
    <div className="w-[400px] h-[520px] bg-demo flex flex-col justify-start items-center">
      <input
        className="w-[200px] h-[40px] bg-demo2 rounded-xl pl-2 text-white my-[10px]"
        defaultValue="방이름을 지어주세요."
      />
      <div className="w-[320px] h-[320px] grid grid-cols-2 grid-rows-2 mb-[20px] gap-[2px]">
        {members.map((m, idx) => (
          <div
            key={idx}
            className="w-[160px] h-[160px] bg-demo2 flex justify-center items-center"
          >
            <p>{m}</p>
          </div>
        ))}
      </div>
      <div className="w-[320px] h-[70px] bg-white mb-[10px]">option</div>
      <div className="bg-white w-[100px] h-[30px] rounded-full text-center hover:bg-demo2">
        create
      </div>
    </div>
  );
};

export default CreateRoom;
