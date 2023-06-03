import RoundCard from "@components/Card/RoundCard";
import AccumlatedBox from "@components/Box/AccumlatedBox";
import MainFacilityCard from "@components/Card/MainFacilityCard";

import ActionBox from "@components/Box/ActionBox";
import {action_on_round} from "@ITypes/play";

interface Props {
  turn: number;
  round: number;
  phase: number;
  action_on_round: action_on_round[];
}

const MainMapBoard = () => {
  return (
    <div className="w-[1060px] h-[490px] flex gap-[10px] mt-[20px] mb-[20px] text-xs bg-[url('/images/mainboard/bg.png')] bg-cover">
      {/* 라운드카드 이전*/}
      <div className="w-[240px] h-[490px] flex flex-row gap-[20px]">
        {/*  첫째 줄*/}
        <div className="flex flex-col gap-[16px]">
          <AccumlatedBox name={"덤불"} direction={"left"} imgidx="1_1" />
          <AccumlatedBox name={"수풀"} direction={"right"} imgidx="1_2" />
          <ActionBox layout={"h-[50px] "} name={"자원시장"} imgidx="1_3" />
          <AccumlatedBox name={"점토 채굴장"} direction={"left"} imgidx="1_4" />
          <ActionBox layout={"h-[80px] "} name={"교습1"} imgidx="1_5" />
          <AccumlatedBox name={"유량극단"} direction={"right"} imgidx="1_6" />
        </div>
        {/* 둘째 줄*/}
        <div className="flex flex-col gap-[10px]">
          <ActionBox layout={"h-[120px]"} name={"농장확장"} imgidx="2_1" />
          <ActionBox layout={"h-[70px]"} name={"화합장소"} imgidx="2_2" />
          <ActionBox layout={"h-[50px]"} name={"곡식종자"} imgidx="2_3" />
          <ActionBox name={"농지"} imgidx="2_4" />
          <ActionBox layout={"h-[80px]"} name={"교습2"} imgidx="2_5" />
          <ActionBox layout={"h-[50px]"} name={"날품팔이"} imgidx="2_6" />
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
            <AccumlatedBox name={"숲"} direction={"right"} imgidx="3_1" />
            <AccumlatedBox name={"흙 채굴장"} direction={"left"} imgidx="3_2" />
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
            <AccumlatedBox name={"갈대밭"} direction={"right"} imgidx="3_3" />
            <AccumlatedBox name={"낚시"} direction={"left"} imgidx="3_4" />
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
