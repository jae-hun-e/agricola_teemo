import { useState } from "react";
import { cls } from "@utils/util";
import { boolean } from "zod";
import { fenceAddValidation, fenceDelValidation } from "@utils/fence";

interface Prop {
  fenceList: number[][];
  // fenceList: number[];
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
  const [isChecked, setChecked] = useState(false);

  const delFence = () => {
    let newFence = [...fenceList];
    newFence[idx - 1] = [];
    newFence = fenceDelValidation(newFence, idx - 1);
    setFenceList(newFence);
    setChecked(!isChecked);
  };

  const addFence = () => {
    // fenceValidation isChecked
    let newFence = [...fenceList];
    newFence[idx - 1] = [1, 2, 3, 4];
    newFence = fenceAddValidation(newFence);

    const sum = newFence.reduce((acc, cur) => acc + cur.length, 0);
    console.log("sum", sum);
    if (sum > 10) {
      alert("6개 이상 선택할 수 없습니다.");
      return;
    } else {
      // 빈방일 때
      setChecked(!isChecked);
      if (landInfo.filed_type === null) {
        setFenceList(newFence);
      }
    }
  };

  return (
    <div
      className={cls(
        "w-[100px] h-[100px]  flex justify-center items-center",
        isChecked ? "bg-yellow-200" : "bg-demo",
        "border-solid border-red-500",
        fenceList[idx - 1]?.includes(1) && "border-l-[5px]",
        fenceList[idx - 1]?.includes(2) && "border-t-[5px]",
        fenceList[idx - 1]?.includes(3) && "border-r-[5px]",
        fenceList[idx - 1]?.includes(4) && "border-b-[5px]"
      )}
      onClick={isChecked ? delFence : addFence}
    >
      농장{idx}
    </div>
  );
};

export default LandBox;
