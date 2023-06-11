import { cls } from "@utils/util";
import { useState } from "react";

interface Props {
  direction: string;
  list: number[][];
  matrix: number[];
  isHide: boolean;
  plusFence: (matrix: number[], checked: boolean) => void;
}
const FenceBox = ({ direction, list, matrix, isHide, plusFence }: Props) => {
  const build = list.find((item) => item.join("") === matrix.join(""));

  const [checked, setChecked] = useState<boolean>(false);

  const onClick = () => {
    {
      console.log("matrix", matrix);
    }
    plusFence(matrix, !checked);
    // setChecked(!checked);
  };

  return (
    <div
      className={cls(
        isHide ? "invisible" : "visible",
        direction === "row" ? "w-[15px] h-[100px]" : "h-[15px] w-[100px]",
        build ? "bg-gray-400" : "bg-gray-200",
        "hover:bg-gray-300"
      )}
      onClick={onClick}
    />
  );
};

export default FenceBox;
