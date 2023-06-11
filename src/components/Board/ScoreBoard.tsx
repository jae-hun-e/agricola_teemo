import ModalButton from "@components/Button/ModalButton";

const ScoreBoard = () => {
  return (
    <ModalButton
      name="점수표"
      layoutCSS="bg-demo h-[80px] w-[80px] flex justify-center"
    >
      <div>점수 계산 방법 설명</div>
    </ModalButton>
  );
};

export default ScoreBoard;
