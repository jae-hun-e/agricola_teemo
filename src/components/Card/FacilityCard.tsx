import ModalButton from "@components/Button/ModalButton";
import SubFacilityCard from "@components/Card/SubFacilityCard";
import MainFacilityCard from "@components/Card/MainFacilityCard";
import { useRecoilValue } from "recoil";
import { userInfo } from "@atom/auth";
import { gamePlayData } from "@atom/gamePlayData";

interface Props {
  owner: number;
}
const FacilityCard = ({ owner }: Props) => {
  const { players } = useRecoilValue(gamePlayData);
  const { userId } = useRecoilValue(userInfo);
  console.log("FacilityCard", players[owner].name, userId);
  return (
    <ModalButton
      name={
        Number(players[owner].name) === userId
          ? "내 설비"
          : `Player${players[owner].name} 설비`
      }
      layoutCSS="bg-demo h-[80px] w-[80px] flex justify-center"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        {Number(players[owner].name) === userId
          ? "내 설비"
          : `Player${players[owner].name} 설비`}
        <div className="flex gap-3">
          <MainFacilityCard owner={Number(players[owner].name)} />
          <SubFacilityCard owner={owner} />
        </div>
      </div>
    </ModalButton>
  );
};

export default FacilityCard;
