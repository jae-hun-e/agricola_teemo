import { cls } from "@utils/util";
import ModalButton from "@components/Button/ModalButton";
import { handleAction } from "next/dist/server/app-render/action-handler";

interface Props {
  layoutCSS?: string;
  idx: number;
}
const RoundCard = ({ layoutCSS, idx }: Props) => {
  const handleAction = () => {
    console.log("user action_", idx);
  };
  return (
    <div
      className={cls(
        "w-[100px] h-[150px] bg-cover rounded-md",
        layoutCSS ? layoutCSS : ""
      )}
      style={{
        backgroundImage: `url('/images/mainboard/round_${idx}.png')`,
      }}
    >
      <ModalButton
        layoutCSS="w-[100px] h-[150px] cursor-pointer"
        childrenCSS="w-[800px] h-[600px]"
        type="action"
        handleAction={handleAction}
      >
        <div className="relative flex justify-center">
          <div className="w-[800px] h-[600px] flex flex-col justify-center items-center">
            round_{idx} 설명
          </div>
        </div>
      </ModalButton>
    </div>
  );
};

export default RoundCard;
