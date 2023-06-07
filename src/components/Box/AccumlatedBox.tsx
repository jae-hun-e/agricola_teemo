import { IBaseCards } from "@ITypes/play";
import ModalButton from "@components/Button/ModalButton";
import { sendActionSocket } from "@utils/socket";

interface Props {
  client: WebSocket | null;
  base_cards: IBaseCards;
  direction: string;
  imgidx?: string;
}

// 쌓이는 개수 표시해야함
const AccumlatedBox = ({ client, base_cards, direction, imgidx }: Props) => {
  const handleAction = () => {
    sendActionSocket(client, base_cards, 0);
    console.log("user action_", imgidx);
  };
  return (
    <div className="w-[100px] h-[70px]">
      {direction === "right" ? (
        <div className="flex justify-around h-full">
          <img
            src={`/images/mainboard/${imgidx}1.png`}
            alt=""
            className="w-1/2 flex justify-center items-center rounded-l"
          />
          <img
            src={`/images/mainboard/${imgidx}.png`}
            alt=""
            className="w-1/2 flex justify-center items-center rounded-r"
          />
          <ModalButton
            layoutCSS="w-[100px] h-[70px] cursor-pointer absolute"
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
      ) : (
        <div className="flex justify-around h-full">
          <img
            src={`/images/mainboard/${imgidx}.png`}
            alt=""
            className="w-1/2 flex justify-center items-center rounded-l"
          />
          <img
            src={`/images/mainboard/${imgidx}1.png`}
            alt=""
            className="w-1/2 flex justify-center items-center rounded-r"
          />
          <ModalButton
            layoutCSS="w-[100px] h-[70px] cursor-pointer absolute"
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
      )}
    </div>
  );
};

export default AccumlatedBox;
