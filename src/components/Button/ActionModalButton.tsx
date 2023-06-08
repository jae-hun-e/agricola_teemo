import { useState } from "react";
import { useRecoilValue } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";
import { sendActionSocket, sendAdditionalSocket } from "@utils/socket";
import ModalButton from "@components/Button/ModalButton";
import { cls } from "@utils/util";
import { IBaseCards } from "@ITypes/play";

interface Props {
  client: WebSocket | null;
  base_cards: IBaseCards;
  layout?: string;
  imgidx: string;
}

const ActionModalButton = ({ client, base_cards, layout, imgidx }: Props) => {
  const handleAction = () => {
    base_cards.player !== null
      ? alert("다른 player가 있는 칸은 선택할 수 없습니다.")
      : sendActionSocket(client, base_cards, 0);
  };
  return (
    <ModalButton
      layoutCSS={cls(
        "w-[100px] cursor-pointer absolute top-0",
        layout ? layout : "h-[70px]"
      )}
      childrenCSS="w-[700px] h-[600px]"
      type="action"
      handleAction={handleAction}
    >
      <div className="relative flex justify-center">
        <div className="w-[700px] h-[600px] flex flex-col justify-center items-center">
          <p className="text-xl">{base_cards.card_number} 설명</p>
          <img
            src={`/images/mainboard/${imgidx}.png`}
            alt=""
            className="w-1//3 flex justify-center items-center rounded-l"
          />
        </div>
      </div>
    </ModalButton>
  );
};

export default ActionModalButton;
