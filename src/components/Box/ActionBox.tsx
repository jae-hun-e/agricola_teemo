import { cls } from "@utils/util";
import { IBaseCards } from "@ITypes/play";
import ModalButton from "@components/Button/ModalButton";
import { sendActionSocket, sendAdditionalSocket } from "@utils/socket";
import JobCard from "@components/Card/JobCard";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";

import AdditionalModalButton from "@components/Button/AdditionallModalButton";
import ActionModalButton from "@components/Button/ActionModalButton";

interface Props {
  client: WebSocket | null;
  base_cards: IBaseCards;
  layout?: string;
  imgidx?: string;
}
const ActionBox = ({ client, layout, base_cards, imgidx }: Props) => {
  const additionalCardOpen = [
    "BASE_05",
    "BASE_07",
    "BASE_08",
    "BASE_10",
    "BASE_11",
  ];

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
      {additionalCardOpen.includes(base_cards.card_number) ? (
        <AdditionalModalButton
          client={client}
          base_cards={base_cards}
          layout={layout}
        />
      ) : (
        <ActionModalButton
          client={client}
          base_cards={base_cards}
          layout={layout}
          imgidx={imgidx}
        />
      )}
    </div>
  );
};

export default ActionBox;
