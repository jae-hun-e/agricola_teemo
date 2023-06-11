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
  openBuildRoomAdditional,
  openCageAdditional,
  openJobAdditional,
  openMainFacilityAdditional,
  openPlumFarmAdditional,
  openSubFacilityAdditional,
  openUseGrainAdditional,
  openUserBoardAdditional,
} from "@constants/cardCase";
import CardViewers from "@components/CardAction/CardViewer";
import BuildHouseCard from "@components/CardAction/BuildHouseCard";
import PlumFarmCard from "@components/CardAction/PlumFarm";
import UseGrain from "@components/CardAction/UseGrain";
import { playIndex } from "@atom/lobbyToPlay";

interface Props {
  client: WebSocket | null;
  base_cards: IBaseCards;
  layout?: string;
}
const AdditionalModalButton = ({ client, base_cards, layout }: Props) => {
  const [additionalCard, setAdditionalCard] = useState<string | Object>("");
  const additionalBoard = useRecoilValue(sendDataUserBoard);
  const { players, primary_cards } = useRecoilValue(gamePlayData);
  const userList = useRecoilValue(playIndex);
  console.log("userList", userList);
  const myJobCard = players[userList[0]].cards.filter((card) =>
    card.card_number.includes("JOB")
  );
  const mySubFacilityCard = players[userList[0]].cards.filter((card) =>
    card.card_number.includes("FAC")
  );

  /*TODO test용 피니시 버튼*/
  const [finish, setFinish] = useState<boolean>(false);
  const onFinish = () => {
    console.log("additionalBoard", additionalBoard);
    setFinish(!finish);
  };
  const onClick = (data: string) => {
    setAdditionalCard((pre) => {
      return pre === "" ? data : "";
    });
  };

  const handleAction = () => {
    base_cards.player !== null
      ? alert("다른 player가 있는 칸은 선택할 수 없습니다.")
      : base_cards.card_number in
        {
          ...openUserBoardAdditional,
          ...openPlumFarmAdditional,
          ...openBuildRoomAdditional,
          ...openUseGrainAdditional,
        }
      ? sendAdditionalSocket(client, base_cards, userList[0], additionalBoard)
      : sendAdditionalSocket(client, base_cards, userList[0], {
          card_number: String(additionalCard),
        });
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
        <CardViewers
          // @ts-ignore
          title={openJobAdditional[base_cards.card_number]}
          cards={myJobCard}
          selectedCard={String(additionalCard)}
          onClick={onClick}
        />
      ) : // 주요설비
      base_cards.card_number in openMainFacilityAdditional ? (
        <CardViewers
          // @ts-ignore
          title={openMainFacilityAdditional[base_cards.card_number]}
          cards={mySubFacilityCard}
          primaryCards={primary_cards}
          selectedCard={String(additionalCard)}
          onClick={onClick}
          isHouseFix={base_cards.card_number === "ACTION_06"}
        />
      ) : //{/* 보조 설비 카드*/}
      base_cards.card_number in openSubFacilityAdditional ? (
        <CardViewers
          // @ts-ignore
          title={openSubFacilityAdditional[base_cards.card_number]}
          cards={mySubFacilityCard}
          selectedCard={String(additionalCard)}
          onClick={onClick}
          isFamilyAdd={base_cards.card_number === "ACTION_07"}
        />
      ) : base_cards.card_number in openPlumFarmAdditional ? (
        <PlumFarmCard cardNumber={base_cards.card_number} />
      ) : base_cards.card_number in openBuildRoomAdditional ? (
        <BuildHouseCard cardNumber={base_cards.card_number} />
      ) : base_cards.card_number in openUseGrainAdditional ? (
        <UseGrain cardNumber={base_cards.card_number} />
      ) : base_cards.card_number in openCageAdditional ? (
        <div className="flex flex-col justify-center items-center">
          <p className="flex w-full justify-center items-center text-2xl my-4">
            집 한번 고치기 행동 한 후에 울타리 치기
          </p>
          <UserBoard owner={userList[0]} type={base_cards.card_number} />
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
      ) : (
        //{/* user board 카드*/}
        <div className="flex flex-col justify-center items-center">
          <p className="mt-[10px]">
            {/*// @ts-ignore*/}
            {openUserBoardAdditional[base_cards.card_number]}
          </p>
          <UserBoard owner={userList[0]} type={base_cards.card_number} />
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
