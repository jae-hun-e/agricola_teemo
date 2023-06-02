import UserBoard from "@components/Board/UserBoard";
import { playData } from "../constants/demoData";

const Fence = () => {
  const { turn, round, phase, action_on_round, common_resources, players } =
    playData;
  return (
    <div className="w-full h-full flex justify-center items-center">
      <UserBoard owner={players[0]} />
    </div>
  );
};

export default Fence;
