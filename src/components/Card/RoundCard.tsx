import { cls } from "@utils/util";
import { IRoundCards } from "@ITypes/play";
import AdditionalModalButton from "@components/Button/AdditionallModalButton";
import ActionModalButton from "@components/Button/ActionModalButton";
import { roundAdditionalCardOpen } from "@constants/cardCase";
import { gamePlayData } from "@atom/gamePlayData";
import { useRecoilValue } from "recoil";
import Image from "next/image";

interface Props {
  client: WebSocket | null;
  layoutCSS?: string;
  round_cards: IRoundCards;
  idx: number;
}

const RoundCard = ({ client, layoutCSS, round_cards, idx }: Props) => {
  const { round } = useRecoilValue(gamePlayData);
    const leftTop: any = Object.values(round_cards.additional_action)[0];
    const leftBottom: any = Object.values(round_cards.additional_action)[1];
    const rightTop: any = Object.values(round_cards.additional_action)[2];
    const rightBottom: any = Object.values(round_cards.additional_action)[3];
    console.log(leftTop);
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
      >
          {
              Object.entries(leftTop).map((item, idx) => {
                  if (item[1] !== 0) {
                      return <div key={idx} className="absolute -left-1" style={{
                          top: idx * 2,
                          zIndex: 20 + idx,
                      }}>
                          <div className="flex flex-row gap-0.5">
                              <Image src={`/images/mainboard/item${idx + 1}.png`} alt={"leftTop"} width={20} height={20} />
                              <span className="text-white text-xs">X{item[1]}</span>
                          </div>
                      </div>;
                  }
              })
          }
          {
              Object.entries(leftBottom).map((item, idx) => {
                  if (item[1] !== 0) {
                      return <div key={idx} className="absolute -left-1" style={{
                          bottom: idx * 2,
                          zIndex: 20 + idx,
                      }}>
                          <div className="flex flex-row gap-0.5">
                              <Image src={`/images/mainboard/item${idx + 1}.png`} alt={"leftTop"} width={20} height={20} />
                              <span className="text-white text-xs">X{item[1]}</span>
                          </div>
                      </div>;
                  }
              })
          }
          {
              Object.entries(rightTop).map((item, idx) => {
                  if (item[1] !== 0) {
                      return <div key={idx} className="absolute -right-1" style={{
                          top: idx * 2,
                          zIndex: 20 + idx,
                      }}>
                          <div className="flex flex-row gap-0.5">
                              <Image src={`/images/mainboard/item${idx + 1}.png`} alt={"leftTop"} width={20} height={20} />
                              <span className="text-white text-xs">X{item[1]}</span>
                          </div>
                      </div>;
                  }
              })
          }
          {
              Object.entries(rightBottom).map((item, idx) => {
                  if (item[1] !== 0) {
                      return <div key={idx} className="absolute -right-1" style={{
                          bottom: idx * 2,
                          zIndex: 20 + idx,
                      }}>
                          <div className="flex flex-row gap-0.5">
                              <Image src={`/images/mainboard/item${idx + 1}.png`} alt={"leftTop"} width={20} height={20} />
                              <span className="text-white text-xs">X{item[1]}</span>
                          </div>
                      </div>;
                  }
              })
          }
      </div>
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
          className="absolute w-[40px] h-[40px] bg-contain bg-center bg-no-repeat left-[30px] bottom-[10px] z-10"
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
