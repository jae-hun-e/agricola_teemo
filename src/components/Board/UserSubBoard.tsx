import PlayerButton from "@components/Button/PlayerButton";
import { cls } from "@utils/util";
import ModalButton from "@components/Button/ModalButton";
import UserBoard from "@components/Board/UserBoard";
import FacilityCard from "@components/Card/FacilityCard";
import JobCard from "@components/Card/JobCard";
import { useRecoilState, useRecoilValue } from "recoil";
import { IPlayData, IPlayers, IResources } from "@ITypes/play";
import { gamePlayData } from "@atom/gamePlayData";
import { useEffect } from "react";
import { Simulate } from "react-dom/test-utils";
import input = Simulate.input;
interface Props {
  owner: IPlayers;
  direction: string;
  idx: number;
}

const UserSubBoard = ({ direction, owner, idx }: Props) => {
  const { players, first, turn } = useRecoilValue<IPlayData>(gamePlayData);

  const {
    wood,
    clay,
    stone,
    reed,
    grain,
    vegetable,
    sheep,
    boar,
    cattle,
    food,
    fence,
    barn,
    family,
    // @ts-ignore
  } = owner.resource;

  const materials = [
    { 나무: wood },
    { 흙: clay },
    { 돌: stone },
    { 갈대: reed },
    { 곡식종자: grain },
    { 채소종자: vegetable },
    { 양: sheep },
    { 돼지: boar },
    { 소: cattle },
    { 음식: food },
    { 울타리: fence },
    { 외양간: family },
    { 가족: family },
  ];
  return (
    <div
      className={cls(
        "",
        direction === "left" || direction === "right"
          ? "flex flex-col w-[90px] h-[688px] "
          : "flex flex-row h-[90px] w-[688px] relative"
      )}
    >
      <div className="relative">
        {/* 선 플레이어*/}
        {first === idx && (
          <div
            className="w-[25px] h-[35px] absolute bg-center bg-no-repeat bg-cover z-10 -top-[5px] right-[10px]"
            style={{ backgroundImage: `url('/images/mainboard/item0.png')` }}
          />
        )}

        <PlayerButton
          direction={direction}
          name={owner.name}
          myTurn={turn === idx}
        />
      </div>
      <div
        className={cls(
          "absolute ",
          direction === "left" || direction === "right"
            ? "top-[90px]"
            : "left-[90px]"
        )}
      >
        {/* other players info detail*/}
        <ModalButton
          layoutCSS={cls(
            direction === "left" || direction === "right"
              ? "w-[90px] h-[598px]"
              : "w-[598px] h-[90px] flex "
          )}
          childrenCSS="w-[800px] h-[600px] bg-demo"
        >
          <div className="flex flex-col items-center pt-10 gap-3">
            <p> 상대 보드</p>
            <div className="flex gap-3">
              <UserBoard owner={idx} type="view" />
              <div className="flex flex-col justify-center items-center gap-[30px] w-[100px]">
                <div className="text-center">
                  {"[설비 카드]"}
                  <FacilityCard owner={idx} />
                </div>
                <div className="text-center">
                  {"[직업 카드]"}
                  <JobCard />
                </div>
              </div>
            </div>
          </div>
        </ModalButton>
      </div>
      <div
        className={cls(
          "bg-demo text-xs",
          direction === "left" || direction === "right"
            ? "w-[90px] h-[598px]"
            : "w-[598px] h-[90px] flex"
        )}
      >
        {materials.map((material, i) => (
          <div
            key={i}
            className={cls(
              "flex justify-center items-center",
              direction === "left" ? "flex-row" : "",
              direction === "right" ? "flex-row-reverse" : "",
              direction === "top" ? "flex-col" : "",
              direction === "bottom" ? "flex-col-reverse" : ""
            )}
          >
            <p
              className={cls(
                "bg-demo2",
                "flex justify-center items-center",
                direction === "left" ? "w-[50px] h-[46px]" : "",
                direction === "right" ? "w-[50px] h-[46px]" : "",
                direction === "top" ? "h-[50px] w-[46px]" : "",
                direction === "bottom" ? "h-[50px] w-[46px]" : ""
              )}
            >
              {Object.keys(material)[0] === "울타리"
                ? `${Object.values(material)[0]}/15`
                : Object.keys(material)[0] === "외양간"
                ? `${Object.values(material)[0]}/4`
                : Object.keys(material)[0] === "가족"
                ? `${Object.values(material)[0]}/5`
                : Object.values(material)[0]}
            </p>
            <p
              className={cls(
                "flex justify-center items-center bg-contain bg-center bg-no-repeat",
                direction === "left" ? "w-[40px] h-[46px]" : "",
                direction === "right" ? "w-[40px] h-[46px]" : "",
                direction === "top" ? "h-[40px] w-[46px]" : "",
                direction === "bottom" ? "h-[40px] w-[46px]" : ""
              )}
              style={{
                backgroundImage:
                  i === 12
                    ? `url('/images/mainboard/item${i + 1 + idx}.png')`
                    : `url('/images/mainboard/item${i + 1}.png')`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSubBoard;
