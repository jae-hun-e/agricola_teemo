import ModalButton from "@components/Button/ModalButton";
import SubFacilityCard from "@components/Card/SubFacilityCard";
import MainFacilityCard from "@components/Card/MainFacilityCard";

interface Props {
  owner: number;
}
const FacilityCard = ({ owner }: Props) => {
  return (
    <ModalButton
      name={owner === 0 ? "내 설비" : `Player${owner} 설비`}
      layoutCSS="bg-demo h-[80px] w-[80px] flex justify-center"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        {owner === 0 ? "내 설비" : `Player${owner} 설비`}
        <div className="flex gap-3">
          <MainFacilityCard owner={owner} />
          <SubFacilityCard owner={owner} />
        </div>
      </div>
    </ModalButton>
  );
};

export default FacilityCard;
