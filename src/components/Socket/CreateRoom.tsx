import { KeyboardEvent, useEffect } from "react";
import { detailRoomData } from "../../constants/demoData";
import { useForm } from "react-hook-form";
import { cls } from "@utils/util";
import ModalButton from "@components/Button/ModalButton";

interface Props {
  roomId: number;
  userId: number;
}
const CreateRoom = ({ roomId, userId }: Props) => {
  const { register, handleSubmit, getValues, reset } = useForm();

  if (roomId !== 0) {
  }

  // TODO 실데이터로 변결 할 것
  const detailData = detailRoomData.data[roomId];
  // console.log("detailData", detailData);

  const joinRoom = () => {
    alert(`'${detailData.option.title}'방 참가완료`);
  };

  const createRoom = () => {
    alert(`'${getValues("title")}'방 생성완료`);
  };

  const onSubmit = () => {
    return roomId === 0 ? createRoom() : joinRoom();
  };

  const checkKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") e.preventDefault();
  };
  return (
    <div className="w-[400px] h-[520px] bg-demo ">
      {/* TODO creat + 자신이 만든 방*/}
      <form
        className="flex flex-col justify-start items-center"
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(e) => checkKeyDown(e)}
      >
        {roomId === 0 ? (
          <input
            type="text"
            className="w-[200px] h-[40px] bg-demo2 rounded-xl pl-4 text-white my-[10px]"
            defaultValue="방이름을 지어주세요."
            {...register("title")}
            onClick={() => reset({ title: "" })}
          />
        ) : (
          <div className="w-[200px] h-[40px] bg-demo2 rounded-xl  text-white my-[10px] flex justify-center items-center">
            {detailData.option.title}
          </div>
        )}

        {/*  참가인원들 */}
        <div className="relative">
          <div className="w-[322px] h-[320px] flex flex-wrap mb-[20px] gap-[2px] ">
            {Array.from({ length: 4 }, (_, i) => i + 1).map((num, idx) => {
              const user = detailData.participant[idx]
                ? detailData.participant[idx]
                : false;
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

                  {/*TODO 호스트가 나갔을 경우 다음 순번으로 호스트 처리*/}
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
            {roomId === 0 ? (
              <input type="checkbox" {...register("isChat")} />
            ) : (
              <div className="w-[80px] ">
                {detailData.option.is_chat ? "가능" : "불가능"}
              </div>
            )}
          </div>

          {roomId === 0 && (
            <div className="w-[150px] h-[20px] flex justify-start items-center gap-3">
              <p>Mode:</p>
              <input
                type="text"
                {...register("isPassword")}
                className="w-[100px] bg-demo"
              />
            </div>
          )}

          <div className="w-[150px] h-[20px] flex justify-start items-center gap-3">
            <p>Time : </p>
            {roomId === 0 ? (
              <div className="flex gap-1">
                <input
                  type="text"
                  {...register("time")}
                  className="w-[50px] bg-demo"
                />
                <p>min</p>
              </div>
            ) : (
              <div className="w-[80px]">{detailData.option.time}min</div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-white w-[100px] h-[30px] rounded-full text-center hover:bg-demo2"
        >
          {roomId === 0 ? "create" : "join"}
        </button>
      </form>
    </div>
  );
};

export default CreateRoom;
