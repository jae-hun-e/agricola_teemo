import { cls } from "@utils/util";
import { ICards, IPrimaryCards } from "@ITypes/play";
import { useEffect, useState } from "react";
import Image from "next/image";

interface CardViewerProps {
  title: string;
  cards: ICards[];
  primaryCards?: IPrimaryCards[];
  selectedCard: string;
  onClick: (data: any) => void;
  isHouseFix?: boolean;
  isFamilyAdd?: boolean;
}

const CardViewers = ({
  title,
  cards = [],
  primaryCards = [],
  selectedCard,
  onClick,
  isHouseFix = false,
  isFamilyAdd = false,
}: CardViewerProps) => {
  const [isSub, setIsSub] = useState<boolean | undefined>(undefined);
  const [viewCards, setViewCards] = useState<any[]>([]);
  const isBothCards = cards.length > 0 && primaryCards.length > 0;

  useEffect(() => {
    setIsSub(undefined);
  }, []);

  useEffect(() => {
    if (isSub !== undefined) {
      setViewCards(isSub ? cards : primaryCards);
    } else {
      setViewCards(cards);
    }
  }, [isSub, cards, primaryCards]);

  if (isBothCards && isSub === undefined) {
    return (
      <div className="flex flex-col justify-center items-center gap-3 my-8">
        {isHouseFix && (
          <div className="flex flex-row w-full justify-between items-center m-auto">
            <p className="flex w-full justify-center items-center text-2xl">
              집 고치기 행동 후 설비 카드 선택
            </p>
          </div>
        )}
        <div className="flex gap-3 flex-row h-full space-x-10">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => setIsSub(false)}
          >
            <div className="flex justify-center items-center text-lg">
              주요 설비 카드 선택
            </div>
            <Image
              src="/assets/PRI_FAC_01.png"
              alt=""
              width={250}
              height={180}
            />
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => setIsSub(true)}
          >
            <div className="flex justify-center items-center text-lg">
              보조 설비 카드 선택
            </div>
            <Image
              src="/assets/SUB_FAC_01.png"
              alt=""
              width={250}
              height={180}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row w-full justify-between items-center my-1">
        <div onClick={() => setIsSub(undefined)}>
          {isBothCards && (
            <Image
              src="/icon/back.png"
              alt="back icon"
              height={16}
              width={16}
            />
          )}
        </div>
        {isFamilyAdd ? (
          <p className="flex w-full justify-center items-center text-2xl">
            가족 늘리기 행동 후 보조 설비 카드 선택
          </p>
        ) : (
          <p className="mt-[10px]">{title}</p>
        )}
        <p></p>
      </div>
      <div className="relative flex justify-center">
        <div className="grid grid-cols-4 gap-[10px] mt-[20px]">
          {viewCards.map((data, i) => (
            <div
              key={i}
              className={cls(
                "w-[136px] h-[212px] bg-cover rounded-md bg-center bg-no-repeat",
                "border-solid border-red-500",
                data.card_number === selectedCard ||
                  data.is_used ||
                  data.owner === 0
                  ? "border-[5px]"
                  : ""
              )}
              style={{
                backgroundImage: `url('/assets/${data.card_number}.png')`,
              }}
              onClick={() => onClick(data.card_number)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardViewers;
