import { cls } from "@utils/util";
import { IBaseCards } from "@ITypes/play";
import ModalButton from "@components/Button/ModalButton";
import { sendActionSocket, sendAdditionalSocket } from "@utils/socket";
import JobCard from "@components/Card/JobCard";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";

interface Props {
  client: WebSocket | null;
  base_cards: IBaseCards;
  layout?: string;
  imgidx?: string;
}
const ActionBox = ({ client, layout, base_cards, imgidx }: Props) => {
  const [additionallCard, setAdditionalCard] = useState<string>("");
  const { players } = useRecoilValue(gamePlayData);
  const myJobCard = players[0].cards.slice(0, 7);
  const mySubFacilityCard = players[0].cards.slice(7);

  const onClick = (data) => {
    setAdditionalCard(data.card_number);
  };
  const handleAction = () => {
    base_cards.player !== null
      ? alert("다른 player가 있는 칸은 선택할 수 없습니다.")
      : base_cards.card_number === "BASE_05" ||
        base_cards.card_number === "BASE_08"
      ? sendAdditionalSocket(client, base_cards, 0, additionallCard)
      : sendActionSocket(client, base_cards, 0);
    console.log("user action_", imgidx);
  };
  return (
    <div className="relative">
      <img
        src={`/images/mainboard/${imgidx}.png`}
        alt=""
        className={cls(
          "w-[100px] rounded-md cursor-pointer",
          layout ? layout : "h-[70px]"
        )}
      />
      {base_cards.player !== null && (
        <div
          className="absolute w-[40px] h-[40px] bg-contain bg-center bg-no-repeat top-[10px] left-[30px]"
          style={{
            backgroundImage: `url('/images/mainboard/item${
              13 + base_cards.player
            }.png')`,
          }}
        />
      )}
      <ModalButton
        layoutCSS={cls(
          "w-[100px] cursor-pointer absolute top-0",
          layout ? layout : "h-[70px]"
        )}
        childrenCSS="w-[800px] h-[600px]"
        type="action"
        handleAction={handleAction}
      >
        {base_cards.card_number === "BASE_05" ? (
          //   교습
          <div className="relative flex justify-center">
            <div className="flex gap-[10px] mt-[50px]">
              {myJobCard.map((data, i) => (
                <div
                  key={i}
                  className={cls(
                    "w-[100px] h-[200px] bg-center bg-no-repeat",
                    "border-solid border-red-500",
                    data.is_use ? "border-[5px]" : ""
                  )}
                  style={{
                    backgroundImage: `url('/assets/${data.card_number}.png')`,
                  }}
                  onClick={() => onClick(data)}
                ></div>
              ))}
            </div>
          </div>
        ) : base_cards.card_number === "BASE_08" ? (
          //   화합장소
          <div className="relative flex justify-center">
            <div className="flex gap-[10px] mt-[50px]">
              {mySubFacilityCard.map((data, i) => (
                <div
                  key={i}
                  className="w-[100px] h-[200px] bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/assets/${data.card_number}.png')`,
                  }}
                  onClick={() => onClick(data)}
                ></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative flex justify-center">
            <div className="w-[800px] h-[600px] flex flex-col justify-center items-center">
              base_{imgidx} 설명
              <p>base_cards.card_number :{base_cards.card_number}</p>
            </div>
          </div>
        )}
      </ModalButton>
    </div>
  );
};

export default ActionBox;
