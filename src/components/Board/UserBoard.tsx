import LandBox from "@components/Box/LandBox";
import RoomBox from "@components/Box/RoomBox";
import { useEffect, useState } from "react";
import { cls } from "@utils/util";
import { fenceValidation } from "@utils/fence";

interface Props {
  owner?: object;
}

// 임시값
let limit = 6;
let isHide = false;

const UserBoard = ({ owner }: Props) => {
  // todo socket으로 연결 후 landInfo,fenceList 안에 데이터 넣어주기
  const [landInfo, setLandInfo] = useState(
    Array.from({ length: 14 }, (_, i) => ({
      idx: i + 1,
      filed_type: null,
      fence: [],
    }))
  );
  const [fenceList, setFenceList] = useState<number[][]>(
    Array.from({ length: 13 }, () => [])
  );

  // server 에서 보내는 데이터로 Fence 초기화
  useEffect(() => {
    const fences = owner?.fences;
    if (fences) {
      // setFenceList((pre) => {
      //   const newFence = [...pre];
      //   Object.keys(fences).forEach((idx) => {
      //     newFence[idx - 1] = fences[idx];
      //   });
      //   console.log("newFence", newFence);
      //   return newFence;
      // });
    }
  }, []);

  // useEffect(() => {
  //   // setFenceList(() => fenceValidation(landInfo, limit));
  //   setFenceList(() => fenceValidation(fenceList, limit));
  // }, [landInfo]);

  useEffect(() => {}, [fenceList]);

  return (
    <div className="w-[598px] h-[368px] bg-demo2 flex flex-wrap justify-center p-[4px] gap-[15px]">
      {/*첫 줄*/}

      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex flex-col  justify-center items-center ">
          <div className={cls("w-[100px]", "flex")}>
            <LandBox
              setFenceList={setFenceList}
              fenceList={fenceList}
              // fenceList={fenceList[i - 1]}
              idx={i}
              landInfo={landInfo[i - 1]}
              setLandInfo={setLandInfo}
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
              // fenceList={fenceList[i + 3]}
              idx={i + 4}
              landInfo={landInfo[i + 3]}
              setLandInfo={setLandInfo}
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
              // fenceList={fenceList[i + 7]}
              idx={i + 8}
              landInfo={landInfo[i + 7]}
              setLandInfo={setLandInfo}
            />
          </div>
        </div>
      ))}

      {/*{console.log("fenceList", fenceList)}*/}
    </div>
  );
};
export default UserBoard;
