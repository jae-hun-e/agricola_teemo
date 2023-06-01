import { useState } from "react";
import { cls } from "@utils/util";
import { boolean } from "zod";
import { fenceValidation } from "@utils/fence";

interface Prop {
  // fenceList: number[][];
  fenceList: number[];
  setFenceList: Function;
  idx: number;
  landInfo: object;
  setLandInfo: Function;
}
const LandBox = ({
  fenceList,
  setFenceList,
  idx,
  landInfo,
  setLandInfo,
}: Prop) => {
  const [check, setCheck] = useState(false);
  const onClick = () => {
    setCheck(!check);
    // 빈방일 때
    if (landInfo.mode === null) {
      //   1차
      setLandInfo((prev: any) => {
        const newInfo = [...prev];
        newInfo[idx - 1].fence = [1, 2, 3, 4];
        return newInfo;
      });

      // fence 합치기
      // setFenceList((prev: any) => {
      //   const newFence = [...prev];
      //   newFence[idx - 1] = [1, 2, 3, 4];
      //   return newFence;
      // });
      // fenceValidation(fenceList, 6);
    }
  };

  return (
    <div
      className={cls(
        "w-[100px] h-[100px]  flex justify-center items-center",
        check ? "bg-yellow-200" : "bg-demo",
        "border-solid border-red-500",
        fenceList?.includes(1) && "border-l-[5px]",
        fenceList?.includes(2) && "border-t-[5px]",
        fenceList?.includes(3) && "border-r-[5px]",
        fenceList?.includes(4) && "border-b-[5px]"
      )}
      onClick={onClick}
    >
      농장{idx}
    </div>
  );
};

export default LandBox;
