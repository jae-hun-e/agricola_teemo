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
    base_cards.player !== null
      ? alert("다른 player가 있는 칸은 선택할 수 없습니다.")
      : sendActionSocket(client, base_cards, 0);

    console.log("user action_", imgidx);
  };
  return (
    <div className="w-[100px] h-[70px]">
      {direction === "right" ? (
        <div className="flex justify-around h-full relative">
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
          {base_cards.player !== null ? (
            <div
              className="absolute w-[40px] h-[40px] bg-contain bg-center bg-no-repeat left-[5px] top-[15px]"
              style={{
                backgroundImage: `url('/images/mainboard/item${
                  13 + base_cards.player
                }.png')`,
              }}
            />
          ) : (
            <div className="absolute w-[40px] h-[40px] bg-contain bg-center bg-no-repeat left-[5px] top-[15px] text-white  font-bold flex justify-center items-center flex">
              <div
                className="w-[25px] h-[30px] bg-cover"
                style={{
                  backgroundImage: `url('/images/mainboard/${
                    Object.keys(base_cards.resource)[0]
                  }.png')`,
                }}
              />
              <p className="text-sm w-[20px]">
                X{base_cards.resource[Object.keys(base_cards.resource)[0]]}
              </p>
            </div>
          )}
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
        <div className="flex justify-around h-full relative">
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
          {base_cards.player !== null ? (
            <div
              className="absolute  w-[40px] h-[40px] bg-contain bg-center bg-no-repeat right-[5px] top-[15px] "
              style={{
                backgroundImage: `url('/images/mainboard/item${
                  13 + base_cards.player
                }.png')`,
              }}
            />
          ) : (
            <div className="absolute w-[40px] h-[40px] bg-contain bg-center bg-no-repeat right-[5px] top-[15px] text-white  font-bold flex justify-center items-center flex">
              <p className="text-sm w-[20px]">
                {base_cards.resource[Object.keys(base_cards.resource)[0]]}X
              </p>

              <div
                className="w-[25px] h-[30px] bg-cover"
                style={{
                  backgroundImage: `url('/images/mainboard/${
                    Object.keys(base_cards.resource)[0]
                  }.png')`,
                }}
              />
            </div>
          )}
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
