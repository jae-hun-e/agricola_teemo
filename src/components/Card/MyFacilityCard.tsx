import ModalButton from "@components/Button/ModalButton";
import SubFacilityCard from "@components/Card/SubFacilityCard";
import MainFacilityCard from "@components/Card/MainFacilityCard";

const MyFacilityCard = () => {
  return (
    <ModalButton
      name="내 설비"
      layoutCSS="bg-demo h-[80px] w-[80px] flex justify-center"
    >
      <div className="flex justify-center items-center">
        <SubFacilityCard />
        <MainFacilityCard />
      </div>
    </ModalButton>
  );
};

export default MyFacilityCard;
