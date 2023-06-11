import { useEffect, useState } from "react";
import Image from "next/image";
import { cls } from "@utils/util";
import UserBoard from "@components/Board/UserBoard";
import { useRecoilState } from "recoil";
import { sendDataUserBoard } from "@atom/sendUserBoardChangeData";

interface BuildHouseCardProps {
  cardNumber: string;
}

const BuildHouseCard = ({ cardNumber }: BuildHouseCardProps) => {
  const [isLeft, setIsLeft] = useState<boolean | undefined>(undefined);
  const [isBuildHouse, setIsBuildHouse] = useState<boolean>(false);
  const [isBuildBarn, setIsBuildBarn] = useState<boolean>(false);
  const [customSendData, setCustomSendData] = useState<any>({});
  const [sendData, setSendData] = useRecoilState(sendDataUserBoard);

  useEffect(() => {
    setIsLeft(undefined);
  }, []);

  useEffect(() => {
    setSendData(customSendData);
  }, [isBuildHouse, isBuildBarn]);

  useEffect(() => {
    if (sendData) {
      setCustomSendData((prev: any) => ({ ...prev, ...sendData }));
    }
  }, [sendData]);

  const finishBuildHouse = () => {
    if (isLeft) {
      setIsBuildHouse((prev) => !prev);
    }
  };

  const finishBuildBarn = () => {
    if (isLeft !== undefined && !isLeft) {
      setIsBuildBarn((prev) => !prev);
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
              방 만들기
            </div>
            <Image
              src="/assets/BASE_07_2.png"
              alt=""
              width={250}
              height={180}
            />
            {isBuildHouse && (
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
              외양간 짓기
            </div>
            <Image
              src="/assets/BASE_07_1.png"
              alt=""
              width={250}
              height={180}
            />
            {isBuildBarn && (
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
        <p className="mt-[10px]">농장 확장</p>
        <p></p>
      </div>
      <div className="relative flex justify-center">
        {isLeft ? (
          <UserBoard owner={0} type={"BASE_07"} />
        ) : (
          <UserBoard owner={0} type={"BARN"} />
        )}
      </div>
      <div className="flex flex-row space-x-5">
        {isLeft && (
          <button
            type="button"
            className={cls(
              "w-[100px] h-[40px]  mt-[20px]",
              isBuildHouse ? "bg-yellow-300" : "bg-demo2"
            )}
            onClick={finishBuildHouse}
          >
            finish
          </button>
        )}
        {!isLeft && (
          <button
            type="button"
            className={cls(
              "w-[100px] h-[40px]  mt-[20px]",
              isBuildBarn ? "bg-yellow-300" : "bg-demo2"
            )}
            onClick={finishBuildBarn}
          >
            finish
          </button>
        )}
      </div>
    </div>
  );
};

export default BuildHouseCard;
