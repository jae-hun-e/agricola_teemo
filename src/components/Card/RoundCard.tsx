import { cls } from "@utils/util";
import ModalButton from "@components/Button/ModalButton";
import { IRoundCards } from "@ITypes/play";
import { sendActionSocket } from "@utils/socket";
import { useRecoilValue } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";
import AdditionalModalButton from "@components/Button/AdditionallModalButton";
import ActionModalButton from "@components/Button/ActionModalButton";

interface Props {
  client: WebSocket | null;
  layoutCSS?: string;
  round_cards: IRoundCards;
  idx: number;
}
const RoundCard = ({ client, layoutCSS, round_cards }: Props) => {
  const { round } = useRecoilValue(gamePlayData);

  const additionalCardOpen = [
    "ACTION_01",
    "ACTION_02",
    "ACTION_03",
    "ACTION_04",
    "ACTION_06",
    "ACTION_07",
    "ACTION_08",
    "ACTION_11",
    "ACTION_12",
  ];

  const handleAction = () => {
    console.log("round card", round_cards);
    round_cards.player !== null
      ? alert("다른 player가 있는 칸은 선택할 수 없습니다.")
      : sendActionSocket(client, round_cards, 0);
  };

  // 비활성화
  // if (idx > round + 1)
  //   return (
  //     <div
  //       className="w-[100px] h-[150px] bg-cover rounded-md relative"
  //       style={{
  //         backgroundImage: `url('/assets/ACTION_${
  //           idx < 10 ? `0${idx}` : idx
  //         }_FLIPPED.png')`,
  //       }}
  //     />
  //   );

  return (
    <div
      className={cls(
        "w-[100px] h-[150px] bg-cover rounded-md relative",
        layoutCSS ? layoutCSS : ""
      )}
      style={{
        backgroundImage: `url('/assets/${round_cards.card_number}.png')`,
      }}
    >
      {round_cards.player !== null && (
        <div
          className="absolute w-[40px] h-[40px] bg-contain bg-center bg-no-repeat left-[30px] bottom-[10px]"
          style={{
            backgroundImage: `url('/images/mainboard/item${
              13 + round_cards.player
            }.png')`,
          }}
        />
      )}
      {additionalCardOpen.includes(round_cards.card_number) ? (
        <AdditionalModalButton
          client={client}
          base_cards={round_cards}
          layout={"h-[150px]"}
        />
      ) : (
        <ActionModalButton
          client={client}
          base_cards={round_cards}
          layout={"h-[150px]"}
          imgidx={round_cards.card_number}
        />
      )}
    </div>
  );
};

export default RoundCard;
