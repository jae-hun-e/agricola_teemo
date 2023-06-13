import ModalButton from "@components/Button/ModalButton";
import { IDetailRoom } from "@ITypes/lobby";
import { useEffect, useState } from "react";
import Timer from "@components/Share/Timer";

interface Props {
  socket: WebSocket | undefined;
  userId: number;
  detailData: IDetailRoom | undefined;
}

const DetailRoom = ({ socket, userId, detailData }: Props) => {
  const [full, setFull] = useState<boolean>(false);

  useEffect(() => {
    // console.log("detailData", detailData);
    detailData?.participants.length === 4 ? setFull(true) : setFull(false);
  }, [detailData]);

  // room exit
  const onExit = () => {
    const exitRoom = {
      command: "exit",
      user_id: userId,
      room_id: detailData?.room_id,
    };

    socket?.send(JSON.stringify(exitRoom));
  };

  // room join
  const onJoin = () => {
    // console.log("onJoin", userId);

    const joinRoom = {
      command: "enter",
      user_id: userId,
      room_id: detailData?.room_id,
    };
    socket?.send(JSON.stringify(joinRoom));
  };
  return (
    <div className="w-[400px] h-[520px]  bg-lobby1 border-2 border-solid border-[#bba027]">
      {full && (
        <Timer
          roomId={detailData?.room_id as number}
          time={3}
          key={"lobbyToPlay"}
        />
      )}
      <div className="flex flex-col justify-start items-center">
        <div className="w-[200px] h-[40px] bg-demo2 rounded-xl  text-white my-[10px] flex justify-center items-center">
          {detailData?.options.title}
        </div>

        {/*  참가인원들 */}
        <div className="relative">
          <div className="w-[322px] h-[320px] flex flex-wrap mb-[20px] gap-[2px] ">
            {Array.from({ length: 4 }, (_, i) => i).map((num, idx) => {
              const user = detailData?.participants[idx];
              return (
                <div
                  key={idx}
                  className="w-[160px] h-[160px]  flex justify-center items-center bg-[url('/images/lobby/place.png')] bg-cover"
                >
                  {user ? (
                    <ModalButton
                      layoutCSS="w-[160px] h-[160px]  flex justify-center items-center cursor-pointer hover:bg-yellow-200 bg-demo2 cursor-pointer"
                      name={user + ""}
                    >
                      <div className="flex flex-col ">
                        <div>user 개인 정보들</div>
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
            <div className="w-[80px]">{detailData?.options.time_limit} min</div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-white w-[100px] h-[30px] rounded-full text-center hover:bg-demo2"
          onClick={detailData?.participants.includes(userId) ? onExit : onJoin}
        >
          {detailData?.participants.includes(userId) ? "exit" : "join"}
        </button>
      </div>
    </div>
  );
};

export default DetailRoom;
