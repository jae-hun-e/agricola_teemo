import ModalButton from "@components/Button/ModalButton";
interface Props {
  owner: number;
}
const SubFacilityCard = ({ owner }: Props) => {
  return (
    <ModalButton
      name="보조 설비"
      layoutCSS=" flex justify-center w-[80px] h-[80px] bg-demo cursor-pointer"
    >
      <div className="flex justify-center items-center">
        {owner === 1 ? "내 보조설비" : `Player${owner} 보조설비`}
      </div>
    </ModalButton>
  );
};

export default SubFacilityCard;
