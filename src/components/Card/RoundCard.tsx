import { cls } from "@utils/util";
import ModalButton from "@components/Button/ModalButton";
import { IRoundCards } from "@ITypes/play";
import { sendActionSocket } from "@utils/socket";

interface Props {
  client: WebSocket | null;
  layoutCSS?: string;
  round_cards: IRoundCards;
  idx: number;
}
const RoundCard = ({ client, layoutCSS, round_cards, idx }: Props) => {
  const handleAction = () => {
    console.log("round_cards", round_cards);
    console.log(round_cards.card_number.split("_")[1]);
    sendActionSocket(client, round_cards, 0);
    console.log("user action_", idx);
  };
  return (
    <div
      className={cls(
        "w-[100px] h-[150px] bg-cover rounded-md",
        layoutCSS ? layoutCSS : ""
      )}
      style={{
        backgroundImage: `url('/images/mainboard/round_${
          round_cards.card_number.split("_")[1]
        }.png')`,
      }}
    >
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
