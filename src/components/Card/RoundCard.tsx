import { cls } from "@utils/util";
import { IRoundCards } from "@ITypes/play";
import AdditionalModalButton from "@components/Button/AdditionallModalButton";
import ActionModalButton from "@components/Button/ActionModalButton";
import { roundAdditionalCardOpen } from "@constants/cardCase";

interface Props {
  client: WebSocket | null;
  layoutCSS?: string;
  round_cards: IRoundCards;
  idx: number;
}
const RoundCard = ({ client, layoutCSS, round_cards }: Props) => {
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
      {roundAdditionalCardOpen.includes(round_cards.card_number) ? (
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
