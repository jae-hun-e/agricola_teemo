import { cls } from "@utils/util";

interface Props {
  layoutCSS?: string;
  idx: number;
}
const RoundCard = ({ layoutCSS, idx }: Props) => {
  return (
    <div
      className={cls(
        "w-[100px] h-[150px] cursor-pointer bg-cover rounded-md",
        layoutCSS ? layoutCSS : ""
      )}
      style={{
        backgroundImage: `url('/images/mainboard/round_${idx}.png')`,
      }}
    />
  );
};

export default RoundCard;
