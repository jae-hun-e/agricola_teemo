import ModalButton from "@components/Button/ModalButton";
import UserBoard from "@components/Board/UserBoard";

interface Props {
  direction: string;
}
const OtherPlayerButton = ({ direction }: Props) => {
  return (
    <div className="w-[90px] h-[90px] flex justify-center items-center">
      {direction !== "bottom" ? (
        <ModalButton
          name="Player"
          layoutCSS="w-[70px] h-[70px] bg-demo rounded-full flex justify-center items-center cursor-pointer"
          childrenCSS="w-[800px] h-[600px] bg-demo"
        >
          <div className="flex flex-col items-center pt-10 gap-3">
            <p> 상대 유저 보드</p>
            <UserBoard />
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
