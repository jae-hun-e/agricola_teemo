import { Dispatch, KeyboardEvent, SetStateAction } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { IRoomList } from "@ITypes/lobby";

interface Props {
  socket: WebSocket | undefined;
  setOpenCreateRoom: Dispatch<SetStateAction<boolean>>;
  userId: number;
  roomList: IRoomList[];
}
const CreateRoom = ({ socket, setOpenCreateRoom, userId, roomList }: Props) => {
  const { register, handleSubmit, getValues, reset } = useForm();

  // socket

  const onSubmit = (data: FieldValues) => {
    console.log("create room data", data);
    const createRoomInfo = {
      command: "create",
      user_id: userId,
      options: {
        title: data.title,
        mode: data.isPassword.length === 0 ? "public" : "private",
        password: data.isPassword === 0 ? "" : data.isPassword,
        is_chat: data?.isChat,
        time_limit: data?.time,
      },
    };
    socket?.send(JSON.stringify(createRoomInfo));

    const watch = {
      command: "watch",
      user_id: userId,
      room_id: roomList[roomList.length - 1]
        ? roomList[roomList.length - 1].room_id + 1
        : 1,
    };
    socket?.send(JSON.stringify(watch));
    setOpenCreateRoom((pre) => !pre);

    alert(`'${getValues("title")}'방 생성완료`);
  };

  const checkKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") e.preventDefault();
  };
  return (
    <div className="w-[400px] h-[520px]  bg-lobby1 border-2 border-solid border-[#bba027]">
      <form
        className="flex flex-col justify-start items-center"
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(e) => checkKeyDown(e)}
      >
        <input
          type="text"
          className="w-[200px] h-[40px] bg-demo2 rounded-xl pl-4 text-white my-[10px]"
          defaultValue="방이름을 지어주세요."
          {...register("title")}
          onClick={() => reset({ title: "" })}
        />

        {/*  참가인원들 */}
        <div className="relative">
          <div className="w-[322px] h-[320px] flex flex-wrap mb-[20px] gap-[2px] ">
            {Array.from({ length: 4 }, (_, i) => i + 1).map((num, idx) => {
              return (
                <div
                  key={idx}
                  /* className={cls(
                    "w-[160px] h-[160px]  flex justify-center items-center ",
                    "bg-gray-200"
                  )}
                  */
                  className="w-[160px] h-[160px]  flex justify-center items-center bg-[url('/images/lobby/place.png')] bg-cover"
                >
                  <div className="w-full h-full flex justify-center items-center">
                    <p>빈 자리</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*  option 값들 */}
        <div className="w-[320px] h-[70px] p-[5px] bg-white mb-[10px] flex flex-wrap">
          <div className="w-[150px] h-[20px] flex justify-start items-center gap-3">
            <p>Chat :</p>
            <input type="checkbox" {...register("isChat")} />
          </div>

          <div className="w-[150px] h-[20px] flex justify-start items-center gap-3">
            <p>Mode:</p>
            <input
              type="text"
              {...register("isPassword")}
              className="w-[100px] bg-demo"
            />
          </div>

          <div className="w-[150px] h-[20px] flex justify-start items-center gap-3">
            <p>Time : </p>
            <div className="flex gap-1">
              <input
                type="text"
                {...register("time")}
                className="w-[50px] bg-demo"
              />
              <p>min</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-white w-[100px] h-[30px] rounded-full text-center hover:bg-demo2"
        >
          create
        </button>
      </form>
    </div>
  );
};

export default CreateRoom;
