import LandBox from "@components/Box/LandBox";
import RoomBox from "@components/Box/RoomBox";
import { useEffect, useState } from "react";
import { cls } from "@utils/util";

interface Props {
  owner: object;
}

// 임시값
let limit = 6;
let isHide = false;

const UserBoard = ({ owner }: Props) => {
  // TODO socket 으로 연결 후 landInfo,fenceList 안에 데이터 넣어주기
  const [landInfo, setLandInfo] = useState(
    Array.from({ length: 14 }, (_, i) => ({
      idx: i + 1,
      filed_type: null,
    }))
  );
  const [fenceList, setFenceList] = useState<number[][]>(
    Array.from({ length: 13 }, () => [])
  );
  const [isChecked, setChecked] = useState(Array(13).fill(false));

  // server 에서 보내는 데이터로 Fence 초기화
  useEffect(() => {
    const fences = owner?.fences;
    if (fences) {
      setFenceList((pre) => {
        const newFence = [...pre];
        Object.keys(fences).forEach((idx: string) => {
          newFence[Number(idx) - 1] = fences[idx];
        });
        // console.log("newFence", newFence);
        return newFence;
      });
    }
  }, []);

  return (
    <div className="relative">
      <div className="w-[598px] h-[368px] bg-demo2 flex flex-wrap justify-center p-[4px] gap-[15px]">
        {/*첫 줄*/}

        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col  justify-center items-center ">
            <div className={cls("w-[100px]", "flex")}>
              <LandBox
                setFenceList={setFenceList}
                fenceList={fenceList}
                idx={i - 1}
                landInfo={landInfo[i - 1]}
                setLandInfo={setLandInfo}
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
                setFenceList={setFenceList}
                fenceList={fenceList}
                idx={i + 3}
                landInfo={landInfo[i + 3]}
                setLandInfo={setLandInfo}
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

        {/*{console.log("fenceList", fenceList)}*/}
      </div>
      {owner?.name !== "1" && (
        <div className="w-[598px] h-[368px]  flex flex-wrap justify-center p-[4px] gap-[15px] absolute top-0 left-0" />
      )}
    </div>
  );
};
export default UserBoard;
