import ModalButton from "@components/Button/ModalButton";

const GameRuleButton = () => {
  return (
    <ModalButton
      name="Game Rule"
      layoutCSS="bg-demo w-[500px] h-[80px]  flex justify-center cursor-pointer hover:bg-hover"
    >
      <div data-testid={"GameRuleDetail"}>게임 룰</div>
    </ModalButton>
  );
};

export default GameRuleButton;
