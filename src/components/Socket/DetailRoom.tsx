import { cls } from "@utils/util";
import ModalButton from "@components/Button/ModalButton";
import { useEffect, useState } from "react";

interface Props {
  userId: number;
  roomId: number;
}

const DetailRoom = ({ userId, roomId }: Props) => {
  // console.log("roomId", roomId);
  const [detailData, setDetailData] = useState();
  let room: WebSocket;
  useEffect(() => {
    room = new WebSocket(
      "ws://127.0.0.1:8000/ws/v1/lobby/" + roomId + "/" + userId
    );
    room.onopen = () => {
      console.log("room Connected : ", room);
    };

    room.onmessage = (msg: MessageEvent) => {
      setDetailData(() => JSON.parse(msg.data));
    };

    return () => {};
  }, [roomId]);

  const onJoin = () => {
    console.log("onJoin", userId);
  };
  return (
    <div className="w-[400px] h-[520px] bg-demo ">
      <div className="flex flex-col justify-start items-center">
        <div className="w-[200px] h-[40px] bg-demo2 rounded-xl  text-white my-[10px] flex justify-center items-center">
          {detailData?.options.title}
        </div>

        {/*  참가인원들 */}
        <div className="relative">
          <div className="w-[322px] h-[320px] flex flex-wrap mb-[20px] gap-[2px] ">
            {Array.from({ length: 4 }, (_, i) => i + 1).map((num, idx) => {
              // TODO 참가자 정보들 가져오기
              // const user = user ? null : null;
              const user = null;

              return (
                <div
                  key={idx}
                  className={cls(
                    "w-[160px] h-[160px]  flex justify-center items-center ",
                    user ? "bg-demo2" : "bg-gray-200"
                  )}
                >
                  {user ? (
                    <ModalButton
                      layoutCSS="w-[160px] h-[160px]  flex justify-center items-center cursor-pointer hover:bg-yellow-200 bg-demo2 cursor-pointer"
                      name={user.name}
                    >
                      <div className="flex flex-col ">
                        <div>{user.name}</div>
                        <div>{user.img}</div>
                        <div>{user.user_detail}</div>
                      </div>
                    </ModalButton>
                  ) : (
                    <div className="w-full h-full flex justify-center items-center">
                      <p>빈 자리</p>
                    </div>
                  )}

                  {user && idx === 0 ? (
                    <div className="w-[20px] h-[20px] bg-white absolute top-0 left-0 flex justify-center items-center">
                      H
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
        {/*  option 값들 */}
        <div className="w-[320px] h-[70px] p-[5px] bg-white mb-[10px] flex flex-wrap">
          <div className="w-[150px] h-[20px] flex justify-start items-center gap-3">
            <p>Chat :</p>

            <div className="w-[80px] ">
              {detailData?.options.is_chat ? "가능" : "불가능"}
            </div>
          </div>

          <div className="w-[150px] h-[20px] flex justify-start items-center gap-3">
            <p>Mode:</p>
            <div className="w-[80px] ">{detailData?.options.mode}</div>
          </div>

          <div className="w-[150px] h-[20px] flex justify-start items-center gap-3">
            <p>Time : </p>
            <div className="w-[80px]">{detailData?.options.time}min</div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-white w-[100px] h-[30px] rounded-full text-center hover:bg-demo2"
          onClick={onJoin}
        >
          join
        </button>
      </div>
    </div>
  );
};

export default DetailRoom;
