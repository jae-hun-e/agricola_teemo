import { cls } from "@utils/util";
import { IBaseCards } from "@ITypes/play";
import ModalButton from "@components/Button/ModalButton";
import { sendActionSocket } from "@utils/socket";

interface Props {
  client: WebSocket | null;
  base_cards: IBaseCards;
  layout?: string;
  imgidx?: string;
}
const ActionBox = ({ client, layout, base_cards, imgidx }: Props) => {
  const handleAction = () => {
    sendActionSocket(client, base_cards, 0);
    console.log("user action_", imgidx);
  };
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
      <ModalButton
        layoutCSS={cls(
          "w-[100px] cursor-pointer absolute top-0",
          layout ? layout : "h-[70px]"
        )}
        childrenCSS="w-[800px] h-[600px]"
        type="action"
        handleAction={handleAction}
      >
        <div className="relative flex justify-center">
          <div className="w-[800px] h-[600px] flex flex-col justify-center items-center">
            base_{imgidx} 설명
            <p>base_cards.card_number :{base_cards.card_number}</p>
          </div>
        </div>
      </ModalButton>
    </div>
  );
};

export default ActionBox;
