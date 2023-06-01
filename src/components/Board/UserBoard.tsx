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
  const [landInfo, setLandInfo] = useState(
    Array.from({ length: 13 }, (_, i) => ({
      idx: i + 1,
      mode: null,
      fence: [],
    }))
  );

  const [fenceList, setFenceList] = useState<number[][]>(
    Array.from({ length: 13 }, () => [])
  );

  // const sum = fenceList.reduce((acc, cur) => acc + cur.length, 0);

  useEffect(() => {
    setFenceList(() => fenceValidation(landInfo, limit));
  }, [landInfo]);

  useEffect(() => {
    // fence합쳐주기
    //
    // console.log(sum);
    // if (sum > limit) {
    //   console.log("울타리 개수를 초과했습니다.");
    // }
  }, [fenceList]);

  return (
    <div className="w-[598px] h-[368px] bg-demo2 flex flex-wrap justify-center p-[4px] gap-[15px]">
      {/*첫 줄*/}
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex flex-col  justify-center items-center ">
          <div className={cls("w-[100px]", "flex")}>
            <LandBox
              setFenceList={setFenceList}
              // fenceList={fenceList}
              fenceList={fenceList[i - 1]}
              idx={i}
              landInfo={landInfo[i]}
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
              // fenceList={fenceList}
              fenceList={fenceList[i + 3]}
              idx={i + 4}
              landInfo={landInfo[i + 4]}
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
              // fenceList={fenceList}
              fenceList={fenceList[i + 7]}
              idx={i + 8}
              landInfo={landInfo[i + 8]}
              setLandInfo={setLandInfo}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserBoard;
