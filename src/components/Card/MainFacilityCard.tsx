import ModalButton from "@components/Button/ModalButton";

interface Props {
  owner: number;
}

const MainFacilityCard = ({ owner }: Props) => {
  return (
    <ModalButton
      name="주요 설비"
      layoutCSS=" flex justify-center w-[80px] h-[80px] bg-demo cursor-pointer"
    >
      <div className="flex justify-center items-center">
        {owner === -1
          ? "공용 설비"
          : owner === 0
          ? "내 주요설비"
          : `Player${owner} 주요설비`}
      </div>
    </ModalButton>
  );
};

export default MainFacilityCard;
