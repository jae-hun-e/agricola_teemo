import ModalButton from "@components/Button/ModalButton";
import { cls } from "@utils/util";

interface Props {
  direction: string;
  name: string;
  myTurn: boolean;
}
const PlayerButton = ({ direction, name, myTurn }: Props) => {
  return (
    <div className="w-[90px] h-[90px] flex justify-center items-center relative">
      {direction !== "bottom" ? (
        <ModalButton
          name={name}
          layoutCSS={cls(
            myTurn ? "bg-red-500 text-white" : "",
            "w-[70px] h-[70px] bg-demo rounded-full flex justify-center items-center cursor-pointer"
          )}
        >
          <div className="flex flex-col items-center pt-10 gap-3">
            <p> 상대 프로필</p>
          </div>
        </ModalButton>
      ) : (
        <div>
          <p
            className={cls(
              myTurn ? "bg-red-500 text-white" : "",
              "w-[70px] h-[70px] bg-demo rounded-full flex justify-center items-center"
            )}
          >
            User
          </p>
        </div>
      )}
    </div>
  );
};

export default PlayerButton;
