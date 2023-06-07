import { cls } from "@utils/util";
import ModalButton from "@components/Button/ModalButton";
import { IRoundCards } from "@ITypes/play";
import { sendActionSocket } from "@utils/socket";
import { useRecoilValue } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";

interface Props {
  client: WebSocket | null;
  layoutCSS?: string;
  round_cards: IRoundCards;
  idx: number;
}
const RoundCard = ({ client, layoutCSS, round_cards, idx }: Props) => {
  const { round } = useRecoilValue(gamePlayData);
  const handleAction = () => {
    console.log("round card", round_cards);
    round_cards.player !== null
      ? alert("다른 player가 있는 칸은 선택할 수 없습니다.")
      : sendActionSocket(client, round_cards, 0);
  };

  if (idx > round + 1)
    return (
      <div
        className="w-[100px] h-[150px] bg-cover rounded-md relative"
        style={{
          backgroundImage: `url('/assets/ACTION_${
            idx < 10 ? `0${idx}` : idx
          }_FLIPPED.png')`,
        }}
      />
    );
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
      <ModalButton
        layoutCSS="w-[100px] h-[150px] cursor-pointer"
        childrenCSS="w-[800px] h-[600px]"
        type="action"
        handleAction={handleAction}
      >
        <div className="relative flex justify-center">
          <div className="w-[800px] h-[600px] flex flex-col justify-center items-center">
            round_{idx} 설명
            <p>round_cards.card_number :{round_cards.card_number}</p>
          </div>
        </div>
      </ModalButton>
    </div>
  );
};

export default RoundCard;
