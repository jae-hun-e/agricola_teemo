import ModalButton from "@components/Button/ModalButton";
import { gamePlayData } from "@atom/gamePlayData";
import { useRecoilValue } from "recoil";
import { playIndex } from "@atom/lobbyToPlay";

const ScoreBoard = () => {
  const { players } = useRecoilValue(gamePlayData);
  const userList = useRecoilValue(playIndex);
  const score = players.map((player) => player.scores);

  // @ts-ignore
  return (
    <ModalButton
      // name="점수표"
      layoutCSS=" h-[80px] w-[80px] bg-[url('/assets/Question.png')] bg-cover flex justify-center"
    >
      <div className="flex flex-col">
        <p className="text-xl mb-[20px]">점수 계산 방법 설명</p>
        <div className="flex flex-col gap-[10px]">
          {userList.map((user, i) => (
            <div key={i}>
              <p>{user} 플레이어 점수표</p>
              {Object.keys(score[i]).map((key, i) => (
                <div key={i}>
                  {/*// @ts-ignore*/}
                  {key} : {score[0][key]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </ModalButton>
  );
};

export default ScoreBoard;
