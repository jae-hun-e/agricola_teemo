import ModalButton from "@components/Button/ModalButton";
import { cls } from "@utils/util";
import { sendActionSocket, sendAdditionalSocket } from "@utils/socket";
import { useEffect, useState } from "react";
import { IBaseCards } from "@ITypes/play";
import { useRecoilValue } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";
import UserBoard from "@components/Board/UserBoard";
import { sendDataUserBoard } from "@atom/sendUserBoardChangeData";

interface Props {
  client: WebSocket | null;
  base_cards: IBaseCards;
  layout?: string;
}
const AdditionalModalButton = ({ client, base_cards, layout }: Props) => {
  const [additionalCard, setAdditionalCard] = useState<string | Object>("");
  const additionalBoard = useRecoilValue(sendDataUserBoard);
  const { players } = useRecoilValue(gamePlayData);
  const myJobCard = players[0].cards.slice(0, 7);
  const mySubFacilityCard = players[0].cards.slice(7);

  // Additional info 선택
  const openJobAdditional = {
    BASE_05: "교습1 : 직업선택",
    BASE_11: "교습2 : 직업선택",
  };
  const openSubFacilityAdditional = { BASE_08: "화합장소 : 보조설비" };
  const openUserBoardAdditional = {
    BASE_07: "농지확장 ",
    BASE_10: "밭 : 농지확장",
  };

  /*TODO test용 피니시 버튼*/
  const [finish, setFinish] = useState<boolean>(false);
  const onFinish = () => {
    console.log("additionalBoard", additionalBoard);
    setFinish(!finish);
  };
  const onClick = (data) => {
    setAdditionalCard((pre) => {
      return pre === "" ? data.card_number : "";
    });
  };

  const handleAction = () => {
    base_cards.player !== null
      ? alert("다른 player가 있는 칸은 선택할 수 없습니다.")
      : !finish
      ? alert("finish 버튼을 눌러주세요.")
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
        <div className="flex flex-col justify-center items-center">
          <p className="mt-[10px]">
            {openJobAdditional[base_cards.card_number]}
          </p>
          <div className="relative flex justify-center">
            <div className="grid grid-cols-4 gap-[10px] mt-[20px]">
              {myJobCard.map((data, i) => (
                <div
                  key={i}
                  className={cls(
                    "w-[136px] h-[212px] bg-cover rounded-md bg-center bg-no-repeat",
                    "border-solid border-red-500",
                    data.card_number === additionalCard || data.is_use
                      ? "border-[5px]"
                      : ""
                  )}
                  style={{
                    backgroundImage: `url('/assets/${data.card_number}.png')`,
                  }}
                  onClick={() => onClick(data)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ) : //{/* 보조 설비 카드*/}
      base_cards.card_number in openSubFacilityAdditional ? (
        <div className="flex flex-col justify-center items-center">
          <p className="mt-[10px]">
            {openSubFacilityAdditional[base_cards.card_number]}
          </p>
          <div className="relative flex justify-center">
            <div className="grid grid-cols-4 gap-[10px] mt-[20px]">
              {mySubFacilityCard.map((data, i) => (
                <div
                  key={i}
                  className={cls(
                    "w-[136px] h-[212px] rounded-md bg-cover bg-center bg-no-repeat",
                    "border-solid border-red-500",
                    data.card_number === additionalCard || data.is_use
                      ? "border-[5px]"
                      : ""
                  )}
                  style={{
                    backgroundImage: `url('/assets/${data.card_number}.png')`,
                  }}
                  onClick={() => onClick(data)}
                ></div>
              ))}
            </div>
          </div>
        </div>
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
