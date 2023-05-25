import { useState } from "react";

const WaitingRoomList = () => {
  const [roomList, setRoomList] = useState([
    1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
  ]);
  return (
    <div className="w-[630px] h-[520px] bg-demo flex flex-col items-center">
      <div className="flex w-[610px] h-[50px]  items-center">
        <div className="w-[40px]">logo</div>
        <div className="w-[calc(100%-40px)] flex justify-between  text-center">
          <div className="w-[120px]">Player</div>
          <div className="w-[120px]">Game Name</div>
          <div className="w-[120px]">Mode</div>
        </div>
      </div>
      <div className="flex flex-col w-[612px] h-[455px] overflow-auto justify-start pt-[1px] px-[1px] bg-white gap-[8px] ">
        {roomList.map((list, idx) => {
          return (
            <div
              key={idx}
              className="flex w-[610px] min-h-[60px] items-center justify-center bg-demo hover:bg-demo2 cursor-pointer"
            >
              <div className="w-[40px]">logo</div>
              <div className="w-[calc(100%-40px)] flex justify-between  text-center">
                <div className="w-[120px]">4/4</div>
                <div className="max-w-[200px]">Let's play Agricola</div>
                <div className="w-[120px]">Private</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WaitingRoomList;
