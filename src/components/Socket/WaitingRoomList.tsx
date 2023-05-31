import { useEffect, useState } from "react";
import { roomList } from "../../constants/demoData";
import ModalButton from "@components/Button/ModalButton";
import { cls } from "@utils/util";
interface IRoomList {
  host: number;
  room_id: number;
  participant: number;
  options: { title: string; mode: string; password: string };
}

interface Props {
  changeViewRoom: (room_id: number) => void;
  userId: number;
  roomList: IRoomList[];
}

const WaitingRoomList = ({ changeViewRoom, userId, roomList }: Props) => {
  // console.log("roomList", roomList, roomList[0].host);
  // console.log("userId", userId, typeof Number(userId)); // 이왜진???

  const myCreateRoom = roomList.find((room) => room.host === Number(userId));
  const list = myCreateRoom
    ? [myCreateRoom, ...roomList.filter((room) => room.host !== Number(userId))]
    : roomList;
  console.log("list", list);

  const detailRoom = (room_id: number) => {
    console.log(roomList[room_id - 1]);
    if (roomList[room_id - 1]?.options.mode === "private") {
      const inputValue = prompt("비밀번호를 입력해주세요:");

      if (inputValue !== roomList[room_id - 1]?.options.password) {
        alert("비밀번호가 틀렸습니다.");
        return;
      } else {
        alert("방에 입장했습니다.");
        changeViewRoom(room_id);
      }
      return;
    }
    changeViewRoom(room_id);
  };

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
      <div className="flex flex-col justify-start w-[612px] h-[455px] overflow-auto pt-[1px] px-[1px] bg-white gap-[8px] ">
        {list.map((room) => {
          return (
            <div
              key={room.room_id}
              className={cls(
                room.host === Number(userId) ? "bg-yellow-200" : "bg-demo",
                "flex w-[610px] min-h-[60px] items-center justify-center hover:bg-demo2 cursor-pointer"
              )}
              onClick={() => detailRoom(room.room_id)}
            >
              <div className="w-[40px]">logo</div>
              <div className="w-[calc(100%-40px)] flex justify-between  text-center">
                <div className="w-[120px]">{room.participant}/4</div>
                <div className="max-w-[200px]">{room.options.title}</div>
                <div className="w-[120px]">{room.options.mode}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WaitingRoomList;
