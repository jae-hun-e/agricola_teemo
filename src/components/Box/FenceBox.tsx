import { cls } from "@utils/util";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  direction: string;
  isHide?: boolean;
  matrix: number[];
  plusFence: (matrix: number[], checked: boolean) => void;
}
const FenceBox = ({ direction, isHide, matrix, plusFence }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  const onClick = () => {
    plusFence(matrix, !checked);
    setChecked(!checked);
  };

  return (
    <div
      className={cls(
        isHide ? "invisible" : "visible",
        direction === "row" ? "w-[15px] h-[100px]" : "h-[15px] w-[100px]",
        checked ? "bg-gray-400" : "bg-gray-200",
        "hover:bg-gray-300"
      )}
      onClick={onClick}
    />
  );
};

export default FenceBox;
