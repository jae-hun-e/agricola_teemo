import ModalButton from "@components/Button/ModalButton";
import { useRecoilValue } from "recoil";
import { gamePlayData } from "@atom/gamePlayData";
interface Props {
  owner: number;
}
const SubFacilityCard = ({ owner }: Props) => {
  const { players } = useRecoilValue(gamePlayData);
  const mySubFacilityCard = players[0].cards.slice(7);
  return (
    <ModalButton
      name="보조 설비"
      layoutCSS=" flex justify-center w-[80px] h-[80px] bg-demo cursor-pointer"
    >
      <div className="flex justify-center items-center">
        <p>{owner === 0 ? "내 보조설비" : `Player${owner} 보조설비`}</p>

        {/*TODO 재영아 이거 layout 수정할 때 모달창 크기도 같이 수정해야 된다!!*/}
        <div className="flex gap-[10px] mt-[50px]">
          {mySubFacilityCard.map((data, i) => (
            <div
              key={i}
              className="w-[100px] h-[200px] bg-center bg-no-repeat"
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
