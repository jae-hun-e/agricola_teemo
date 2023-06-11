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
        <div className="absolute w-[100px] h-[20px] bg-contain bg-center bg-no-repeat left-0 bottom-[20px] text-white  font-bold">
          {round_cards.resource !== null &&
            round_cards.card_number !== "ACTION_09" && (
              <div className="w-full justify-center items-center flex">
                <div
                  className="w-[30px] h-[25px] bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url('/assets/${Object.keys(
                      round_cards.resource
                    ).join("")}.png')`,
                  }}
                />
                <p className="text-xl w-[30px] text-center">
                  X
                  {
                    // @ts-ignore
                    round_cards.resource[
                      Object.keys(round_cards.resource).join("")
                    ]
                  }
                </p>
              </div>
            )}
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
