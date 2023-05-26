import { useState } from "react";
import { roomList } from "../../constants/demoData";
import ModalButton from "@components/Button/ModalButton";

interface Props {
  changeViewRoom: (room_id: number) => void;
}

const WaitingRoomList = ({ changeViewRoom }: Props) => {
  // TODO 실데이터로 바꾸기
  const { room_list } = roomList;

  const detailRoom = (room_id: number) => {
    console.log(room_list[room_id]);
    if (room_list[room_id - 1]?.option.mode === "private") {
      const inputValue = prompt("비밀번호를 입력해주세요:");

      if (inputValue !== room_list[room_id - 1]?.option.password) {
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
      <div className="flex flex-col w-[612px] h-[455px] overflow-auto justify-start pt-[1px] px-[1px] bg-white gap-[8px] ">
        {room_list.map((room, idx) => {
          return (
            <div
              key={room.room_id}
              className="flex w-[610px] min-h-[60px] items-center justify-center bg-demo hover:bg-demo2 cursor-pointer"
              onClick={() => detailRoom(room.room_id)}
            >
              <div className="w-[40px]">logo</div>
              <div className="w-[calc(100%-40px)] flex justify-between  text-center">
                <div className="w-[120px]">{room.participant_num}/4</div>
                <div className="max-w-[200px]">{room.option.title}</div>
                <div className="w-[120px]">{room.option.mode}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WaitingRoomList;
