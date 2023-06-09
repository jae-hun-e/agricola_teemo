import LandBox from "@components/Box/LandBox";
import RoomBox from "@components/Box/RoomBox";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { cls } from "@utils/util";
import { gamePlayData } from "@atom/gamePlayData";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IFields } from "@ITypes/play";
import { sendDataUserBoard } from "@atom/sendUserBoardChangeData";
import { fenceType } from "@constants/cardCase";

interface Props {
  owner: number;
  type: string;
}

// TODO type : "my" :내꺼 밑에, "view" 남에꺼, 나머지는 카드넘버
const UserBoard = ({ owner, type }: Props) => {
  const setAdditional = useSetRecoilState(sendDataUserBoard);
  const { players } = useRecoilValue(gamePlayData);
  const { fields, fences } = players[owner];
  console.log("fields", fields);
  const [landInfo, setLandInfo] = useState<IFields[]>(fields);
  const [fenceList, setFenceList] = useState<number[][]>(
    Array.from({ length: 13 }, () => [])
  );
  const [isChecked, setChecked] = useState(Array(13).fill(false));

  useEffect(() => {
    // server 에서 보내는 데이터로 Fence 초기화
    if (fences) {
      setFenceList((pre) => {
        const newFence = [...pre];
        Object.keys(fences).forEach((idx: string) => {
          newFence[Number(idx)] = fences[idx];
        });
        return newFence;
      });
    }
  }, [fences]);

  // TODO type에 따라 다르게 처리하기

  // 울타리 치기
  useEffect(() => {
    // SocketSendData
    if (fenceType.includes(type))
      setAdditional(() => {
        const sendFence = {};
        fenceList.forEach((fence, i) => {
          if (fence.length > 0) {
            sendFence[i] = fence;
          }
        });
        return { fences: sendFence };
      });
  }, [fenceList]);

  return (
    <div className="relative">
      <div className="w-[598px] h-[368px] bg-demo2 flex flex-wrap justify-center p-[4px] gap-[15px]">
        {/*첫 줄*/}

        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col  justify-center items-center ">
            <div className={cls("w-[100px]", "flex")}>
              <LandBox
                type={type}
                setFenceList={setFenceList}
                fenceList={fenceList}
                idx={i - 1}
                landInfo={landInfo[i]}
                isChecked={isChecked}
                setChecked={setChecked}
              />
            </div>
          </div>
        ))}

        {/* 둘째 줄*/}

        <RoomBox idx={14} />
        {[2, 3, 4, 5].map((i) => (
          <div key={i + 4} className="flex flex-col ">
            <div className={cls("w-[100px]", "flex")}>
              <LandBox
                type={type}
                setFenceList={setFenceList}
                fenceList={fenceList}
                idx={i + 3}
                landInfo={landInfo[i + 3]}
                isChecked={isChecked}
                setChecked={setChecked}
              />
            </div>
          </div>
        ))}

        {/*셋째 줄*/}

        <RoomBox idx={15} />

        {[2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col">
            <div className={cls("w-[100px]", "flex")}>
              <LandBox
                type={type}
                setFenceList={setFenceList}
                fenceList={fenceList}
                idx={i + 7}
                landInfo={landInfo[i + 7]}
                setLandInfo={setLandInfo}
                isChecked={isChecked}
                setChecked={setChecked}
              />
            </div>
          </div>
        ))}
      </div>
      {owner !== 0 && (
        <div className="w-[598px] h-[368px]  flex flex-wrap justify-center p-[4px] gap-[15px] absolute top-0 left-0" />
      )}
    </div>
  );
};
export default UserBoard;
