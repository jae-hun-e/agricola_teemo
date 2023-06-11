import { useEffect, useState } from "react";
import Image from "next/image";
import { cls } from "@utils/util";
import UserBoard from "@components/Board/UserBoard";
import { useRecoilState } from "recoil";
import { sendDataUserBoard } from "@atom/sendUserBoardChangeData";

interface PlumFarmCardProps {
  cardNumber: string;
}

const PlumFarmCard = ({ cardNumber }: PlumFarmCardProps) => {
  const [isLeft, setIsLeft] = useState<boolean | undefined>(undefined);
  const [isFarm, setIsFarm] = useState<boolean>(false);
  const [isSeed, setIsSeed] = useState<boolean>(false);
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
  }, [isFarm, isSeed]);

  useEffect(() => {
    if (sendData) {
      setCustomSendData((prev: any) => ({ ...prev, ...sendData }));
    }
  }, [sendData]);

  const finishFarm = () => {
    if (isLeft) {
      setIsFarm((prev) => !prev);
    }
  };

  const finishSeed = () => {
    if (isLeft !== undefined && !isLeft) {
      setIsSeed((prev) => !prev);
    }
  };

  useEffect(() => {
    setIsLeft(undefined);
  }, []);

  if (isLeft === undefined) {
    return (
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex gap-3 flex-row h-full my-24 space-x-10">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => setIsLeft(true)}
          >
            <div className="flex justify-center items-center text-lg">
              밭 하나 일구기
            </div>
            <Image
              src="/assets/ACTION_12_2.png"
              alt=""
              width={250}
              height={180}
            />
            {isFarm && (
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
              씨 뿌리기
            </div>
            <Image
              src="/assets/ACTION_12_1.png"
              alt=""
              width={250}
              height={180}
            />
            {isSeed && (
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
        <p className="mt-[10px]">{isLeft ? "밭 일구기" : "씨 뿌리기"}</p>
        <p></p>
      </div>
      <div className="relative flex justify-center">
        {isLeft ? (
          <UserBoard owner={0} type="BASE_10" />
        ) : (
          <UserBoard owner={0} type="ACTION_01" />
        )}
      </div>
      <div className="flex justify-center items-center flex-row space-x-5">
        {isLeft && (
          <button
            type="button"
            className={cls(
              "w-[100px] h-[40px]  mt-[20px]",
              isFarm ? "bg-yellow-300" : "bg-demo2"
            )}
            onClick={finishFarm}
          >
            finish
          </button>
        )}
        {!isLeft && (
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
        {!isLeft && (
          <button
            type="button"
            className={cls(
              "w-[100px] h-[40px]  mt-[20px]",
              isSeed ? "bg-yellow-300" : "bg-demo2"
            )}
            onClick={finishSeed}
          >
            finish
          </button>
        )}
      </div>
    </div>
  );
};

export default PlumFarmCard;
