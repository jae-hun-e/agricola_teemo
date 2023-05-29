import FarmBox from "@components/Box/FarmBox";
import RoomBox from "@components/Box/RoomBox";
import { useState } from "react";
import FenceBox from "@components/Box/FenceBox";
import { cls } from "@utils/util";

interface Props {
  owner?: object;
}
const UserBoard = ({ owner }: Props) => {
  // console.log("MyBoard", owner);

  /* fence_Logic
   * 1. 울타리 하나의 좌표 (a,b) -> (a+1,b+1) 안의 울타리 : [a,b,a+1,b+1]
   * 2. 처음 울타리부터 반복문을 돌리면서 범위내의 인접한 울타리를 훑는다 (dfs)
   * 3. 방문한 울타리는 방문처리해준다 (visited)
   * 4. 울타리를 훑으면서 방문한 울타리를 visited에 넣어준다
   * 5. depth가 n이 되었을 때 방문할 수 있는 울타리 안에 처음 울타리가 있다면 true를 반환한다
   * */

  const [fencesList, setFencesList] = useState<number[][]>([]);

  // console.log("fencesList", fencesList);
  const haddleFence = (matrix: number[], checked: boolean) => {
    console.log("matrix, checked", matrix, checked);

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
              plusFence={haddleFence}
              direction={"col"}
              isHide={false}
              matrix={[i - 1, 0, i, 0]}
            />
          </div>
          <div className={cls(i === 5 ? "w-[130px]" : "w-[115px]", "flex")}>
            <FenceBox
              plusFence={haddleFence}
              direction={"row"}
              isHide={false}
              matrix={[i - 1, 0, i - 1, 1]}
            />
            <FarmBox idx={i} />
            {i === 5 && (
              <FenceBox
                plusFence={haddleFence}
                direction={"row"}
                isHide={false}
                matrix={[i, 0, i, 1]}
              />
            )}
          </div>
          {i === 1 && (
            <div className="ml-[15px]">
              <FenceBox
                plusFence={haddleFence}
                direction={"col"}
                isHide={false}
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
              plusFence={haddleFence}
              direction={"col"}
              isHide={false}
              matrix={[i - 1, 1, i, 1]}
            />
          </div>
          <div className={cls(i === 5 ? "w-[130px]" : "w-[115px]", "flex")}>
            <FenceBox
              plusFence={haddleFence}
              direction={"row"}
              isHide={false}
              matrix={[i - 1, 1, i - 1, 2]}
            />
            <FarmBox idx={i + 4} />
            {i === 5 && (
              <FenceBox
                plusFence={haddleFence}
                direction={"row"}
                isHide={false}
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
              plusFence={haddleFence}
              direction={"col"}
              isHide={false}
              matrix={[i - 1, 2, i, 2]}
            />
          </div>
          <div className={cls(i === 5 ? "w-[130px]" : "w-[115px]", "flex")}>
            <FenceBox
              plusFence={haddleFence}
              direction={"row"}
              isHide={false}
              matrix={[i - 1, 2, i - 1, 3]}
            />
            <FarmBox idx={i + 8} />
            {i === 5 && (
              <FenceBox
                plusFence={haddleFence}
                direction={"row"}
                isHide={false}
                matrix={[i, 2, i, 3]}
              />
            )}
          </div>
          <div className="ml-[15px]">
            <FenceBox
              plusFence={haddleFence}
              direction={"col"}
              isHide={false}
              matrix={[i - 1, 3, i, 3]}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserBoard;
