import ModalButton from "@components/Button/ModalButton";
import UserBoard from "@components/Board/UserBoard";

interface Props {
  direction: string;
  name: string;
}
const OtherPlayerButton = ({ direction, name }: Props) => {
  return (
    <div className="w-[90px] h-[90px] flex justify-center items-center">
      {direction !== "bottom" ? (
        <ModalButton
          name={name}
          layoutCSS="w-[70px] h-[70px] bg-demo rounded-full flex justify-center items-center cursor-pointer"
        >
          <div className="flex flex-col items-center pt-10 gap-3">
            <p> 상대 프로필</p>
          </div>
        </ModalButton>
      ) : (
        <p className="w-[70px] h-[70px] bg-demo rounded-full flex justify-center items-center">
          User
        </p>
      )}
    </div>
  );
};

export default OtherPlayerButton;