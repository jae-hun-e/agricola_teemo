import ModalButton from "@components/Button/ModalButton";
import {useRecoilValue} from "recoil";
import {gamePlayData} from "@atom/gamePlayData";
import {cls} from "@utils/util";

const JobCard = () => {
  const {players} = useRecoilValue(gamePlayData);
  const myJobCard = players[0].cards.slice(0, 7);
  // console.log("myJobCard", myJobCard);
  return (
    <ModalButton
      name="직업카드"
      layoutCSS="bg-demo h-[80px] w-[80px] flex justify-center"
      childrenCSS="w-[700px] h-[600px]"
    >
      {/*TODO 재영아 이거 layout 수정할 때 모달창 크기도 같이 수정해야 된다!!*/}
      <div className="flex flex-col justify-center items-center">
        <p className="mt-[10px]">직업 카드</p>

        <div className="grid grid-cols-4 gap-[10px] mt-[20px]">
          {myJobCard.map((data, i) => (
            <div
              key={i}
              className={cls(
                "w-[136px] h-[212px] bg-cover rounded-md bg-center bg-no-repeat",
                "border-solid border-red-500",
                data.is_use ? "border-[5px]" : ""
              )}
              style={{
                backgroundImage: `url('/assets/${data.card_number}.png')`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </ModalButton>
  );
};

export default JobCard;
