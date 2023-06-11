import ModalButton from "@components/Button/ModalButton";
import {useRecoilValue} from "recoil";
import {gamePlayData} from "@atom/gamePlayData";
interface Props {
  owner: number;
}
const SubFacilityCard = ({owner}: Props) => {
  const {players} = useRecoilValue(gamePlayData);
  const mySubFacilityCard = players[0].cards.slice(7);
  return (
    <ModalButton
      name="보조 설비"
      layoutCSS=" flex justify-center w-[80px] h-[80px] bg-demo cursor-pointer"
      childrenCSS="w-[700px] h-[600px]"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="mt-[10px]">{owner === 0 ? "내 보조설비" : `Player${owner} 보조설비`}</p>

        {/*TODO 재영아 이거 layout 수정할 때 모달창 크기도 같이 수정해야 된다!!*/}
        <div className="grid grid-cols-4 gap-[10px] mt-[20px]">
          {mySubFacilityCard.map((data, i) => (
            <div
              key={i}
              className="w-[136px] h-[212px] bg-cover rounded-md bg-center bg-no-repeat"
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
