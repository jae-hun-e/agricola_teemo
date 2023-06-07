import ModalButton from "@components/Button/ModalButton";

const GameRuleButton = () => {
  return (
    <ModalButton
      name="Game Rule"
      layoutCSS="bg-amber-300 w-[500px] h-[80px] rounded-xl border-4 border-solid border-amber-500 flex justify-center cursor-pointer hover:bg-amber-400"
    >
      <div data-testid={"GameRuleDetail"}>게임 룰</div>
    </ModalButton>
  );
};

export default GameRuleButton;
