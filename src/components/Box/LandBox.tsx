import { useState } from "react";
import { cls } from "@utils/util";
import { boolean } from "zod";
import { doubleFenceValidation, fenceAddValidation } from "@utils/fence";

// test
const limit = 12;

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

  // 사이에 fence 세우기
  const fillFence = () => {
    let newFence = [...fenceList];
    newFence[idx] = [1, 2, 3, 4];
    setFenceList(doubleFenceValidation(newFence, idx));
    // todo 선택한 방 filed_type 변경하기
  };

  // fence 취소하기
  const delFence = () => {
    let newFence = [...fenceList];
    newFence[idx] = [];
    newFence = doubleFenceValidation(newFence, idx);
    setFenceList(newFence);
    setChecked(!isChecked);
    // todo 선택한 방 filed_type 변경하기
  };

  const doubleOnClick = () => {
    const input = prompt(
      "방 사이에 울타리를 세우려면 1 입력,\n울타리를 취소하려면 2 입력 하세요 \n(1: 사이에 울타리 or 2 : 울타리 취소)"
    );
    if (input === "1") fillFence();
    if (input === "2") delFence();
  };

  // fence 추가하기
  const addFence = () => {
    // fenceValidation isChecked
    let newFence = [...fenceList];
    newFence[idx] = [1, 2, 3, 4];
    newFence = fenceAddValidation(newFence);
    const sum = newFence.reduce((acc, cur) => acc + cur.length, 0);
    if (sum > limit) {
      alert("6개 이상 선택할 수 없습니다.");
      return;
    } else {
      // 빈방일 때
      setChecked(!isChecked);
      if (landInfo?.filed_type === null) {
        setFenceList(newFence);
      }

      // todo 선택한 방 filed_type 변경하기
    }
  };

  return (
    <div
      className={cls(
        "w-[100px] h-[100px]  flex justify-center items-center",
        isChecked ? "bg-yellow-200" : "bg-demo",
        "border-solid border-red-500",
        fenceList[idx]?.includes(1) && "border-l-[5px]",
        fenceList[idx]?.includes(2) && "border-t-[5px]",
        fenceList[idx]?.includes(3) && "border-r-[5px]",
        fenceList[idx]?.includes(4) && "border-b-[5px]"
      )}
      onClick={isChecked ? doubleOnClick : addFence}
    >
      농장{idx + 1}
    </div>
  );
};

export default LandBox;
