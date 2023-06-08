import { Dispatch, SetStateAction, useState } from "react";
import { cls } from "@utils/util";
import { fenceAddValidation, fenceDelValidation } from "@utils/fence";
import { useRecoilState, useRecoilValue } from "recoil";
import { sendDataUserBoard } from "@atom/sendUserBoardChangeData";
import { gamePlayData } from "@atom/gamePlayData";

interface Prop {
  type: string;
  fenceList: number[][];
  setFenceList: Function;
  idx: number;
  landInfo: object;
  setLandInfo: Function;
  isChecked: boolean[];
  setChecked: Function;
}

const LandBox = ({
  type,
  fenceList,
  setFenceList,
  idx,
  landInfo,
  setLandInfo,
  isChecked,
  setChecked,
}: Prop) => {
  const { players } = useRecoilValue(gamePlayData);
  // const limit = players[0].resource.wood;
  const limit = 10;
  // 사이에 fence 세우기
  const fillFence = () => {
    let newFence = [...fenceList];
    newFence[idx] = [1, 2, 3, 4];
    setFenceList(() => newFence);
  };

  // fence 취소하기
  const delFence = () => {
    let newFence = [...fenceList];
    newFence[idx] = [];
    newFence = fenceDelValidation(newFence, idx, isChecked);
    setFenceList(() => newFence);
    changeChecked();

    // todo 선택한 방 filed_type 변경하기
  };

  // fence 추가하기
  const addFence = () => {
    console.log(idx, fenceList[idx], landInfo);
    // fenceValidation isChecked
    let newFence = [...fenceList];
    newFence[idx] = [1, 2, 3, 4];
    newFence = fenceAddValidation(newFence);
    // console.log("newFence", newFence);

    const sum = newFence.reduce((acc, cur) => acc + cur.length, 0);

    if (sum > limit) {
      alert(`${limit}개 이상 선택할 수 없습니다.`);
      return;
    } else {
      // 빈방일 때
      changeChecked();
      if (landInfo?.field_type === "empty") {
        setFenceList(() => newFence);
      }
      // todo 선택한 방 filed_type 변경하기
    }
  };

  // 두번 클릭 시 fence 추가하기 or 취소하기
  const doubleOnClick = () => {
    const input = prompt(
      "방 사이에 울타리를 세우려면 1 입력,\n울타리를 취소하려면 2 입력 하세요 \n(1: 사이에 울타리 or 2 : 울타리 취소)"
    );
    if (input === "1") fillFence();
    if (input === "2") delFence();
  };

  // TODO 어떤 액션할 건지 선택 (카드 넘버 가져오기)
  const handleOnAction = () => {
    // 밭
    if (type === "BASE_07") {
    }

    // 울타리 치기
    else if (type === "BASE_10") {
      isChecked[idx] ? doubleOnClick() : addFence();
    }
    // 동물 옮기기
    else if (type === "my") {
    }
    //
    // else
  };

  const changeChecked = () => {
    setChecked((pre) => {
      const newChecked = [...pre];
      newChecked[idx] = !newChecked[idx];
      return newChecked;
    });
  };

  return (
    <div
      className={cls(
        "w-[100px] h-[100px]  flex justify-center items-center",
        isChecked[idx] ? "bg-yellow-200" : "bg-demo",
        "border-solid border-red-500",
        fenceList[idx]?.includes(1) && "border-l-[5px]",
        fenceList[idx]?.includes(2) && "border-t-[5px]",
        fenceList[idx]?.includes(3) && "border-r-[5px]",
        fenceList[idx]?.includes(4) && "border-b-[5px]"
      )}
      onClick={handleOnAction}
    >
      농장{idx + 1}
    </div>
  );
};

export default LandBox;
