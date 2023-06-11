import LandBox from "@components/Box/LandBox";
import RoomBox from "@components/Box/RoomBox";
import { useEffect, useState } from "react";
import { cls } from "@utils/util";
import { gamePlayData } from "@atom/gamePlayData";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sendDataUserBoard } from "@atom/sendUserBoardChangeData";
import { fenceType } from "@constants/cardCase";
import { IFences } from "@ITypes/play";

interface Props {
  owner: number;
  type: string;
  client?: WebSocket;
}

// TODO type : "my" :내꺼 밑에, "view" 남에꺼, 나머지는 카드넘버
const UserBoard = ({ owner, type, client }: Props) => {
  const setAdditional = useSetRecoilState(sendDataUserBoard);
  const { players } = useRecoilValue(gamePlayData);
  const { fields, fences } = players[owner];

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

  // 울타리 치기
  useEffect(() => {
    // SocketSendData
    if (fenceType.includes(type))
      setAdditional(() => {
        const sendFence: IFences = {};
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
                client={client}
                owner={owner}
                type={type}
                setFenceList={setFenceList}
                fenceList={fenceList}
                idx={i - 1}
                landInfo={fields[i - 1]}
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
                client={client}
                owner={owner}
                type={type}
                setFenceList={setFenceList}
                fenceList={fenceList}
                idx={i + 3}
                landInfo={fields[i + 3]}
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
                client={client}
                owner={owner}
                type={type}
                setFenceList={setFenceList}
                fenceList={fenceList}
                idx={i + 7}
                landInfo={fields[i + 7]}
                isChecked={isChecked}
                setChecked={setChecked}
              />
            </div>
          </div>
        ))}
      </div>
      {type === "view" && (
        <div className="w-[598px] h-[368px]  flex flex-wrap justify-center p-[4px] gap-[15px] absolute top-0 left-0" />
      )}
    </div>
  );
};
export default UserBoard;
