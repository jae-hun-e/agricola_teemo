import ModalButton from "@components/Button/ModalButton";
import { cls } from "@utils/util";
import { sendAdditionalSocket } from "@utils/socket";
import { useState } from "react";
import { IBaseCards } from "@ITypes/play";
import { useRecoilValue } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";
import UserBoard from "@components/Board/UserBoard";
import { sendDataUserBoard } from "@atom/sendUserBoardChangeData";
import {
  openJobAdditional,
  openMainFacilityAdditional,
  openSubFacilityAdditional,
  openUserBoardAdditional,
} from "@constants/cardCase";
import CardViewers from "@components/CardAction/CardViewer";

interface Props {
  client: WebSocket | null;
  base_cards: IBaseCards;
  layout?: string;
}
const AdditionalModalButton = ({ client, base_cards, layout }: Props) => {
  const [additionalCard, setAdditionalCard] = useState<string | Object>("");
  const additionalBoard = useRecoilValue(sendDataUserBoard);
  const { players, primary_cards } = useRecoilValue(gamePlayData);
  const myJobCard = players[0].cards.filter((card) => card.card_number.includes("JOB"));
  const mySubFacilityCard = players[0].cards.filter((card) => card.card_number.includes("FAC"));

  /*TODO test용 피니시 버튼*/
  const [finish, setFinish] = useState<boolean>(false);
  const onFinish = () => {
    console.log("additionalBoard", additionalBoard);
    setFinish(!finish);
  };
  const onClick = (data: string) => {
    console.log("myJobCard", myJobCard);
    console.log("myJobCard", myJobCard);
    setAdditionalCard((pre) => {
      return pre === "" ? data : "";
    });
  };

  const handleAction = () => {
    base_cards.player !== null
      ? alert("다른 player가 있는 칸은 선택할 수 없습니다.")
      : base_cards.card_number in openUserBoardAdditional
      ? sendAdditionalSocket(client, base_cards, 0, additionalBoard)
      : sendAdditionalSocket(client, base_cards, 0, additionalCard);
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
      {/* 직업 카드*/}
      {base_cards.card_number in openJobAdditional ? (
              <CardViewers title={openJobAdditional[base_cards.card_number]} cards={myJobCard} selectedCard={String(additionalCard)} onClick={onClick}/>
      ) : // 주요설비
      base_cards.card_number in openMainFacilityAdditional ? (
              <CardViewers title={openMainFacilityAdditional[base_cards.card_number]} cards={mySubFacilityCard} primaryCards={primary_cards} selectedCard={String(additionalCard)} onClick={onClick}/>
      ) : //{/* 보조 설비 카드*/}
      base_cards.card_number in openSubFacilityAdditional ? (
              <CardViewers title={openSubFacilityAdditional[base_cards.card_number]} cards={mySubFacilityCard} selectedCard={String(additionalCard)} onClick={onClick}/>
      ) : (
        //{/* user board 카드*/}
        <div className="flex flex-col justify-center items-center">
          <p className="mt-[10px]">
            {openUserBoardAdditional[base_cards.card_number]}
          </p>
          <UserBoard owner={0} type={base_cards.card_number} />
          {/*TODO test용 피니시 버튼*/}
          <button
            type="button"
            className={cls(
              "w-[100px] h-[40px]  mt-[20px]",
              finish ? "bg-yellow-300" : "bg-demo2"
            )}
            onClick={onFinish}
          >
            finish
          </button>
        </div>
      )}
    </ModalButton>
  );
};

export default AdditionalModalButton;
