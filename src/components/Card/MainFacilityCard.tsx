import ModalButton from "@components/Button/ModalButton";
import { cls } from "@utils/util";
import { useRecoilValue } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";
import { userInfo } from "@atom/auth";

interface Props {
  owner: number;
}

const MainFacilityCard = ({ owner }: Props) => {
  const { userId } = useRecoilValue(userInfo);
  const { primary_cards } = useRecoilValue(gamePlayData);
  return (
    <ModalButton
      name="주요 설비"
      layoutCSS=" flex justify-center w-[80px] h-[80px] bg-demo cursor-pointer"
      childrenCSS="w-[700px] h-[600px]"
    >
      <div className="flex flex-col justify-center items-center text-xl">
        {owner === -1
          ? "공용 설비"
          : owner === userId
          ? "내 주요설비"
          : `Player${owner} 주요설비`}
        <div className="relative flex justify-center">
          <div className="grid grid-cols-4 gap-[10px] mt-[20px]">
            {primary_cards.map(
              (data, i) =>
                data.owner === userId && (
                  <div
                    key={i}
                    className={cls(
                      "w-[136px] h-[212px] bg-cover rounded-md bg-center bg-no-repeat",
                      "border-solid border-red-500",
                      data.owner ? "border-[5px]" : ""
                    )}
                    style={{
                      backgroundImage: `url('/assets/${data.card_number}.png')`,
                    }}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </ModalButton>
  );
};

export default MainFacilityCard;
