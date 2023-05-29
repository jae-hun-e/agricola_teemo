import RoundCard from "@components/Card/RoundCard";
import AccumlatedBox from "@components/Box/AccumlatedBox";
import MainFacilityCard from "@components/Card/MainFacilityCard";

import ActionBox from "@components/Box/ActionBox";
import { action_on_round } from "@ITypes/play";

interface Props {
  turn: number;
  round: number;
  phase: number;
  action_on_round: action_on_round[];
}

const MainMapBoard = () => {
  return (
    <div className="w-[1060px] h-[490px] flex gap-[10px] mt-[20px] mb-[20px] text-xs">
      {/* 라운드카드 이전*/}
      <div className="w-[240px] h-[490px] flex flex-row gap-[20px]">
        {/*  첫째 줄*/}
        <div className="flex flex-col gap-[15px]">
          <AccumlatedBox name={"덤불"} direction={"left"} />
          <AccumlatedBox name={"수풀"} direction={"right"} />
          <ActionBox layout={"h-[60px] my-[5px]"} name={"자원시장"} />
          <AccumlatedBox name={"점토 채굴장"} direction={"left"} />
          <ActionBox layout={"h-[60px] mt-[5px]"} name={"교습1"} />
          <AccumlatedBox name={"유량극단"} direction={"right"} />
        </div>
        {/* 둘째 줄*/}
        <div className="flex flex-col gap-[10px]">
          <ActionBox layout={"h-[120px]"} name={"농장확장"} />
          <ActionBox layout={"h-[60px]"} name={"화합장소"} />
          <ActionBox layout={"h-[60px]"} name={"곡식종자"} />
          <ActionBox name={"농지"} />
          <ActionBox name={"교습2"} />
          <ActionBox layout={"h-[60px]"} name={"날품팔이"} />
        </div>
      </div>
      {/* 라운드카드 이후*/}
      <div className="w-[820px] flex flex-col gap-[20px]">
        {/*  첫째 줄 */}
        <div className="flex gap-[20px]">
          <RoundCard idx={1}></RoundCard>
          <RoundCard idx={2}></RoundCard>
          <RoundCard idx={5}></RoundCard>
          <RoundCard idx={8}></RoundCard>
          <RoundCard idx={10}></RoundCard>
          <RoundCard idx={12}></RoundCard>
          <RoundCard idx={14}></RoundCard>
        </div>

        {/*  둘째 줄 */}
        <div className="flex gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <AccumlatedBox name={"숲"} direction={"right"} />
            <AccumlatedBox name={"흙 채굴장"} direction={"left"} />
          </div>

          <RoundCard idx={3}></RoundCard>
          <RoundCard idx={6}></RoundCard>
          <RoundCard idx={9}></RoundCard>
          <RoundCard idx={11}></RoundCard>
          <RoundCard idx={13}></RoundCard>
        </div>

        {/*  셋째 줄 */}
        <div className=" flex gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <AccumlatedBox name={"갈대밭"} direction={"right"} />
            <AccumlatedBox name={"낚시"} direction={"left"} />
          </div>

          <RoundCard idx={4}></RoundCard>
          <RoundCard idx={7}></RoundCard>

          <div className="w-[100px] h-[150px] flex justify-center items-center">
            <MainFacilityCard owner={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMapBoard;
