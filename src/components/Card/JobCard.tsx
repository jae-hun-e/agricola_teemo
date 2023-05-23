import ModalButton from "@components/Button/ModalButton";

const JobCard = () => {
  return (
    <ModalButton
      name="직업카드"
      layoutCSS="bg-demo h-[80px] w-[80px] flex justify-center"
    >
      <div>직업들</div>
    </ModalButton>
  );
};

export default JobCard;
