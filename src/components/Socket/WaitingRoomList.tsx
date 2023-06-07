import {cls} from "@utils/util";
import {IRoomList} from "@ITypes/lobby";

interface Props {
  socket: WebSocket | undefined;
  userId: number;
  roomList: IRoomList[];
  changeDeTailRoom: Function;
}

const WaitingRoomList = ({socket, userId, roomList}: Props) => {
  const detailRoom = (room_idx: number) => {
    // console.log("detailRoom", roomList[room_idx]);
    if (roomList[room_idx]?.options.mode === "private") {
      const inputValue = prompt("비밀번호를 입력해주세요:");

      if (inputValue !== roomList[room_idx]?.options.password) {
        alert("비밀번호가 틀렸습니다.");
        return;
      } else {
        alert("방에 입장했습니다.");
        // changeViewRoom(roomList[room_idx].room_id);
      }
      return;
    }
    const watch = {
      command: "watch",
      user_id: userId,
      room_id: roomList[room_idx].room_id,
    };
    socket?.send(JSON.stringify(watch));
  };

  return (
    <div className="w-[630px] h-[520px] bg-lobby1 border-2 border-solid border-[#bba027] flex flex-col items-center">
      <div className="flex w-[610px] h-[50px]  items-center">
        <div className="w-[40px] ml-[20px]">logo</div>
        <div className="w-[calc(100%-40px)] flex justify-between  text-center">
          <div className="w-[120px]">Player</div>
          <div className="w-[120px]">Game Name</div>
          <div className="w-[120px]">Mode</div>
        </div>
      </div>
      <div className="flex flex-col justify-start w-[612px] h-[455px] overflow-auto pt-[1px] px-[1px] bg-white gap-[8px] ">
        {roomList.map((room, idx) => {
          return (
            <div
              key={room.room_id}
              className={cls(
                room.host === Number(userId) ? "bg-yellow-200" : "bg-[#dddacd]",
                "flex w-[610px] min-h-[60px] items-center justify-center hover:bg-demo2 cursor-pointer"
              )}
              onClick={() => detailRoom(idx)}
            >
              <div className="w-[40px] ml-[20px]">logo</div>
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
