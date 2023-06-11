import RoundCard from "@components/Card/RoundCard";
import AccumlatedBox from "@components/Box/AccumlatedBox";
import MainFacilityCard from "@components/Card/MainFacilityCard";
import ActionBox from "@components/Box/ActionBox";
import { useRecoilState } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";
import { IPlayData } from "@ITypes/play";

const MainMapBoard = ({ client }: { client: WebSocket | null }) => {
  const [{ base_cards, round_cards }, setPlayData] =
    useRecoilState<IPlayData>(gamePlayData);

  return (
    <div className="w-[1060px] h-[490px] flex gap-[10px] mt-[20px] mb-[20px] text-xs bg-[url('/images/mainboard/bg.png')] bg-cover">
      {/* 라운드카드 이전*/}
      <div className="w-[240px] h-[490px] flex flex-row gap-[20px]">
        {/*  첫째 줄*/}
        <div className="flex flex-col gap-[16px]">
          <AccumlatedBox
            client={client}
            base_cards={base_cards[0]}
            direction={"left"}
            imgidx="1_1"
          />
          <AccumlatedBox
            client={client}
            base_cards={base_cards[1]}
            direction={"right"}
            imgidx="1_2"
          />
          <ActionBox
            client={client}
            base_cards={base_cards[2]}
            layout={"h-[50px]"}
            imgidx="1_3"
          />
          <AccumlatedBox
            client={client}
            base_cards={base_cards[3]}
            direction={"left"}
            imgidx="1_4"
          />
          <ActionBox
            client={client}
            base_cards={base_cards[4]}
            layout={"h-[80px]"}
            imgidx="1_5"
          />
          <AccumlatedBox
            client={client}
            base_cards={base_cards[5]}
            direction={"right"}
            imgidx="1_6"
          />
        </div>
        {/* 둘째 줄*/}
        <div className="flex flex-col gap-[10px]">
          <ActionBox
            client={client}
            base_cards={base_cards[6]}
            layout={"h-[120px]"}
            imgidx="2_1"
          />
          <ActionBox
            client={client}
            base_cards={base_cards[7]}
            layout={"h-[70px]"}
            imgidx="2_2"
          />
          <ActionBox
            client={client}
            base_cards={base_cards[8]}
            layout={"h-[50px]"}
            imgidx="2_3"
          />
          <ActionBox client={client} base_cards={base_cards[9]} imgidx="2_4" />
          <ActionBox
            client={client}
            base_cards={base_cards[10]}
            layout={"h-[80px]"}
            imgidx="2_5"
          />
          <ActionBox
            client={client}
            base_cards={base_cards[11]}
            layout={"h-[50px]"}
            imgidx="2_6"
          />
        </div>
      </div>

      {/* 라운드카드 이후*/}
      <div className="w-[820px] flex flex-col gap-[20px]">
        {/*  첫째 줄 */}
        <div className="flex gap-[20px]">
          <RoundCard client={client} idx={1} round_cards={round_cards[0]} />
          <RoundCard client={client} idx={2} round_cards={round_cards[1]} />
          <RoundCard client={client} idx={5} round_cards={round_cards[4]} />
          <RoundCard client={client} idx={8} round_cards={round_cards[7]} />
          <RoundCard client={client} idx={10} round_cards={round_cards[9]} />
          <RoundCard client={client} idx={12} round_cards={round_cards[11]} />
          <RoundCard client={client} idx={14} round_cards={round_cards[13]} />
        </div>

        {/*  둘째 줄 */}
        <div className="flex gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <AccumlatedBox
              client={client}
              base_cards={base_cards[12]}
              direction={"right"}
              imgidx="3_1"
            />
            <AccumlatedBox
              client={client}
              base_cards={base_cards[13]}
              direction={"left"}
              imgidx="3_2"
            />
          </div>

          <RoundCard client={client} idx={3} round_cards={round_cards[2]} />
          <RoundCard client={client} idx={6} round_cards={round_cards[5]} />
          <RoundCard client={client} idx={9} round_cards={round_cards[8]} />
          <RoundCard client={client} idx={11} round_cards={round_cards[10]} />
          <RoundCard client={client} idx={13} round_cards={round_cards[12]} />
        </div>

        {/*  셋째 줄 */}
        <div className=" flex gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <AccumlatedBox
              client={client}
              base_cards={base_cards[14]}
              direction={"right"}
              imgidx="3_3"
            />
            <AccumlatedBox
              client={client}
              base_cards={base_cards[15]}
              direction={"left"}
              imgidx="3_4"
            />
          </div>

          <RoundCard client={client} idx={4} round_cards={round_cards[3]} />
          <RoundCard client={client} idx={7} round_cards={round_cards[6]} />

          <div className="w-[100px] h-[150px] flex justify-center items-center">
            <MainFacilityCard owner={-1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMapBoard;
