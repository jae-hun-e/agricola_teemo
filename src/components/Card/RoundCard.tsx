import { cls } from "@utils/util";
import { IRoundCards } from "@ITypes/play";
import AdditionalModalButton from "@components/Button/AdditionallModalButton";
import ActionModalButton from "@components/Button/ActionModalButton";
import { roundAdditionalCardOpen } from "@constants/cardCase";
import { gamePlayData } from "@atom/gamePlayData";
import { useRecoilValue } from "recoil";

interface Props {
  client: WebSocket | null;
  layoutCSS?: string;
  round_cards: IRoundCards;
  idx: number;
}
const RoundCard = ({ client, layoutCSS, round_cards, idx }: Props) => {
  const { round } = useRecoilValue(gamePlayData);

  // 비활성화
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
      {round_cards.player !== null ? (
        <div
          className="absolute w-[40px] h-[40px] bg-contain bg-center bg-no-repeat left-[30px] bottom-[10px]"
          style={{
            backgroundImage: `url('/images/mainboard/item${
              13 + round_cards.player
            }.png')`,
          }}
        />
      ) : (
        <div className="absolute w-[40px] h-[40px] bg-contain bg-center bg-no-repeat left-[25px] bottom-[10px] text-white  font-bold justify-center items-center flex">
          <div
            className="w-[25px] h-[30px] bg-cover"
            style={{
              backgroundImage: `url('/images/mainboard/${
                // @ts-ignore
                Object.keys(base_cards.resource)[0]
              }.png')`,
            }}
          />
          <p className="text-sm w-[20px]">
            X{/*// @ts-ignore*/}
            {base_cards.resource[Object.keys(base_cards.resource).join("")]}
          </p>
        </div>
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
