import { cls } from "@utils/util";

interface Props {
  layoutCSS?: string;
  idx: number;
}
const RoundCard = ({ layoutCSS, idx }: Props) => {
  return (
    <div
      className={cls(
        "w-[100px] h-[150px] bg-demo cursor-pointer",
        layoutCSS ? layoutCSS : ""
      )}
    >
      Round Card {idx}
    </div>
  );
};

export default RoundCard;
