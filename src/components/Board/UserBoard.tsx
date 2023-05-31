import FarmBox from "@components/Box/FarmBox";
import RoomBox from "@components/Box/RoomBox";
import { useState } from "react";
import FenceBox from "@components/Box/FenceBox";
import { cls } from "@utils/util";
import { fenceValidation } from "@utils/fencen1";

interface Props {
  owner?: object;
}

// 임시값
let fenceNum = 6;
let isHide = false;

const UserBoard = ({ owner }: Props) => {
  // console.log("MyBoard", owner);

  const [fencesList, setFencesList] = useState<number[][]>([]);

  // console.log("fencesList", fencesList);

  if (fencesList.length === fenceNum) {
    // @ts-ignore
    if (fenceValidation(fencesList)) alert("성공");
    else {
      alert("실패");
      setFencesList([]);
    }
  }

  const handleFence = (matrix: number[], checked: boolean) => {
    // console.log("matrix, checked", matrix, checked);

    // fencesList에 추가
    if (checked) setFencesList((prev) => [...prev, matrix]);
    // fencesList에서 제거
    else {
      const newList = [...fencesList].filter(
        (list) => list.join("") !== matrix.join("")
      );
      setFencesList(newList);
    }
  };
  return (
    <div className="w-[598px] h-[368px] bg-demo2 flex flex-wrap p-[4px]">
      {/*첫 줄*/}
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex flex-col h-[115px]">
          <div className="ml-[15px]">
            <FenceBox
              plusFence={handleFence}
              direction={"col"}
              list={fencesList}
              isHide={isHide}
              matrix={[i - 1, 0, i, 0]}
            />
          </div>
          <div className={cls(i === 5 ? "w-[130px]" : "w-[115px]", "flex")}>
            <FenceBox
              plusFence={handleFence}
              direction={"row"}
              list={fencesList}
              isHide={isHide}
              matrix={[i - 1, 0, i - 1, 1]}
            />
            <FarmBox idx={i} />
            {i === 5 && (
              <FenceBox
                plusFence={handleFence}
                direction={"row"}
                list={fencesList}
                isHide={isHide}
                matrix={[i, 0, i, 1]}
              />
            )}
          </div>
          {i === 1 && (
            <div className="ml-[15px]">
              <FenceBox
                plusFence={handleFence}
                direction={"col"}
                list={fencesList}
                isHide={isHide}
                matrix={[0, 1, 1, 1]}
              />
            </div>
          )}
        </div>
      ))}

      {/* 둘째 줄*/}
      <div className="w-[115px] mt-[15px] flex justify-end items-end">
        <RoomBox />
      </div>
      {[2, 3, 4, 5].map((i) => (
        <div key={i + 4} className="flex flex-col h-[115px]">
          <div className="ml-[15px]">
            <FenceBox
              plusFence={handleFence}
              direction={"col"}
              list={fencesList}
              isHide={isHide}
              matrix={[i - 1, 1, i, 1]}
            />
          </div>
          <div className={cls(i === 5 ? "w-[130px]" : "w-[115px]", "flex")}>
            <FenceBox
              plusFence={handleFence}
              direction={"row"}
              list={fencesList}
              isHide={isHide}
              matrix={[i - 1, 1, i - 1, 2]}
            />
            <FarmBox idx={i + 4} />
            {i === 5 && (
              <FenceBox
                plusFence={handleFence}
                direction={"row"}
                list={fencesList}
                isHide={isHide}
                matrix={[i, 1, i, 2]}
              />
            )}
          </div>
        </div>
      ))}

      {/*셋째 줄*/}
      <div className="w-[115px] h-[115px] flex justify-end items-end">
        <RoomBox />
      </div>
      {[2, 3, 4, 5].map((i) => (
        <div key={i} className="flex flex-col h-[130px]">
          <div className="ml-[15px]">
            <FenceBox
              plusFence={handleFence}
              direction={"col"}
              list={fencesList}
              isHide={isHide}
              matrix={[i - 1, 2, i, 2]}
            />
          </div>
          <div className={cls(i === 5 ? "w-[130px]" : "w-[115px]", "flex")}>
            <FenceBox
              plusFence={handleFence}
              direction={"row"}
              list={fencesList}
              isHide={isHide}
              matrix={[i - 1, 2, i - 1, 3]}
            />
            <FarmBox idx={i + 8} />
            {i === 5 && (
              <FenceBox
                plusFence={handleFence}
                direction={"row"}
                list={fencesList}
                isHide={isHide}
                matrix={[i, 2, i, 3]}
              />
            )}
          </div>
          <div className="ml-[15px]">
            <FenceBox
              plusFence={handleFence}
              direction={"col"}
              list={fencesList}
              isHide={isHide}
              matrix={[i - 1, 3, i, 3]}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserBoard;
