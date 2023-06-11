import { useEffect, useState } from "react";
import Image from "next/image";
import { cls } from "@utils/util";
import UserBoard from "@components/Board/UserBoard";
import { useRecoilState } from "recoil";
import { sendDataUserBoard } from "@atom/sendUserBoardChangeData";

interface UseGrainCardProps {
  cardNumber: string;
}

const UseGrainCard = ({ cardNumber }: UseGrainCardProps) => {
  const [isLeft, setIsLeft] = useState<boolean | undefined>(undefined);
  const [isSow, setIsSow] = useState<boolean>(false);
  const [isBake, setIsBake] = useState<boolean>(false);
  const [isGrain, setIsGrain] = useState<boolean>(true);
  const [customSendData, setCustomSendData] = useState<any>({});
  const [sendData, setSendData] = useRecoilState(sendDataUserBoard);

  useEffect(() => {
    setIsLeft(undefined);
  }, []);

  useEffect(() => {
    setSendData((prev) => ({
      ...prev,
      ...customSendData,
      seed: isGrain ? "grain" : "vegetable",
    }));
  }, [isSow, isBake]);

  useEffect(() => {
    if (sendData) {
      setCustomSendData((prev: any) => ({ ...prev, ...sendData }));
    }
  }, [sendData]);

  const finishSow = () => {
    if (isLeft) {
      setIsSow((prev) => !prev);
    }
  };

  const finishBake = () => {
    if (isLeft !== undefined && !isLeft) {
      setIsBake((prev) => !prev);
    }
  };

  if (isLeft === undefined) {
    return (
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex gap-3 flex-row h-full my-16 space-x-10">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => setIsLeft(true)}
          >
            <div className="flex justify-center items-center text-lg">
              씨 뿌리기
            </div>
            <Image
              src="/assets/ACTION_01_1.png"
              alt=""
              width={250}
              height={180}
            />
            {isSow && (
              <div className="flex justify-center items-center text-lg text-red-500">
                처리 완료
              </div>
            )}
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => setIsLeft(false)}
          >
            <div className="flex justify-center items-center text-lg">
              빵 굽기
            </div>
            <Image
              src="/assets/ACTION_01_2.png"
              alt=""
              width={250}
              height={180}
            />
            {isBake && (
              <div className="flex justify-center items-center text-lg text-red-500">
                처리 완료
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row w-full justify-between items-center">
        <div onClick={() => setIsLeft(undefined)}>
          <Image src="/icon/back.png" alt="back icon" height={16} width={16} />
        </div>
        <p className="mt-[10px]">곡식 활용</p>
        <p></p>
      </div>
      <div className="relative flex justify-center">
        {isLeft ? (
          <UserBoard owner={0} type={"ACTION_01"} />
        ) : (
          <div className="flex justify-center items-center h-[200px] w-[600px] text-lg">
            현재 게임 내 모든 화로들이 고장이 나서 사용할 수 없는
            기능입니다.&nbsp; 최대한 빠른 시일 내에 수정하도록 하겠습니다.
          </div>
        )}
      </div>
      <div className="flex flex-row space-x-5">
        {isLeft && (
          <div>
            <button
              className={cls(
                "w-[100px] h-[40px]  mt-[20px]",
                isGrain ? "bg-yellow-500" : "hidden"
              )}
              onClick={() => setIsGrain((prev) => !prev)}
            >
              곡식
            </button>
            <button
              className={cls(
                "w-[100px] h-[40px]  mt-[20px]",
                !isGrain ? "bg-orange-400" : "hidden"
              )}
              onClick={() => setIsGrain((prev) => !prev)}
            >
              채소
            </button>
          </div>
        )}
        {isLeft && (
          <button
            type="button"
            className={cls(
              "w-[100px] h-[40px]  mt-[20px]",
              isSow ? "bg-yellow-300" : "bg-demo2"
            )}
            onClick={finishSow}
          >
            finish
          </button>
        )}
      </div>
    </div>
  );
};

export default UseGrainCard;
