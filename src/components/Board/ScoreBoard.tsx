import ModalButton from "@components/Button/ModalButton";

const ScoreBoard = () => {
  return (
    <ModalButton
      // name="점수표"
      layoutCSS=" h-[80px] w-[80px] bg-[url('/assets/Question.png')] bg-cover flex justify-center"
    >
      <div>점수 계산 방법 설명</div>
    </ModalButton>
  );
};

export default ScoreBoard;
