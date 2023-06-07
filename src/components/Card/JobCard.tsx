import ModalButton from "@components/Button/ModalButton";
import { useRecoilValue } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";
import { cls } from "@utils/util";

const JobCard = () => {
  const { players } = useRecoilValue(gamePlayData);
  const myJobCard = players[0].cards.slice(0, 7);
  // console.log("myJobCard", myJobCard);
  return (
    <ModalButton
      name="직업카드"
      layoutCSS="bg-demo h-[80px] w-[80px] flex justify-center"
      childrenCSS="w-[800px] h-[600px]"
    >
      {/*TODO 재영아 이거 layout 수정할 때 모달창 크기도 같이 수정해야 된다!!*/}
      <div className="flex gap-[10px] mt-[50px]">
        {myJobCard.map((data, i) => (
          <div
            key={i}
            className={cls(
              "w-[100px] h-[200px] bg-center bg-no-repeat",
              "border-solid border-red-500",
              data.is_use ? "border-[5px]" : ""
            )}
            style={{
              backgroundImage: `url('/assets/${data.card_number}.png')`,
            }}
          ></div>
        ))}
      </div>
    </ModalButton>
  );
};

export default JobCard;
