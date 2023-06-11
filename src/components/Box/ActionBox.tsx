import { cls } from "@utils/util";
import { IBaseCards } from "@ITypes/play";
import AdditionalModalButton from "@components/Button/AdditionallModalButton";
import ActionModalButton from "@components/Button/ActionModalButton";
import { baseAdditionalCardOpen } from "@constants/cardCase";

interface Props {
  client: WebSocket | null;
  base_cards: IBaseCards;
  layout?: string;
  imgidx?: string;
}
const ActionBox = ({ client, layout, base_cards, imgidx }: Props) => {
  return (
    <div className="relative">
      <img
        src={`/images/mainboard/${imgidx}.png`}
        alt=""
        className={cls(
          "w-[100px] rounded-md cursor-pointer",
          layout ? layout : "h-[70px]"
        )}
      />
      {base_cards.player !== null && (
        <div
          className="absolute w-[40px] h-[40px] bg-contain bg-center bg-no-repeat top-[10px] left-[30px]"
          style={{
            backgroundImage: `url('/images/mainboard/item${
              13 + base_cards.player
            }.png')`,
          }}
        />
      )}
      {baseAdditionalCardOpen.includes(base_cards.card_number) ? (
        <AdditionalModalButton
          client={client}
          base_cards={base_cards}
          layout={layout}
        />
      ) : (
        <ActionModalButton
          client={client}
          base_cards={base_cards}
          layout={layout}
          imgidx={imgidx}
        />
      )}
    </div>
  );
};

export default ActionBox;
