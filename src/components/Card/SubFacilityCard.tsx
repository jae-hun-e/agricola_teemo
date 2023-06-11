import ModalButton from "@components/Button/ModalButton";
import { useRecoilValue } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";
import { userInfo } from "@atom/auth";
import { cls } from "@utils/util";
interface Props {
  owner: number;
}
const SubFacilityCard = ({ owner }: Props) => {
  const { players } = useRecoilValue(gamePlayData);
  const mySubFacilityCard = players[owner].cards.slice(7);
  const { userId } = useRecoilValue(userInfo);
  return (
    <ModalButton
      name="보조 설비"
      layoutCSS=" flex justify-center w-[80px] h-[80px] bg-demo cursor-pointer"
      childrenCSS="w-[700px] h-[600px]"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="mt-[10px]">
          {Number(players[owner].name) === userId
            ? "내 보조설비"
            : `Player${Number(players[owner].name)} 보조설비`}
        </p>
        <div className="grid grid-cols-4 gap-[10px] mt-[20px]">
          {mySubFacilityCard.map((data, i) => (
            <div
              key={i}
              className={cls(
                "w-[136px] h-[212px] bg-cover rounded-md bg-center bg-no-repeat",
                "border-solid border-red-500",
                data.is_used ? "border-[5px]" : ""
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

export default SubFacilityCard;
