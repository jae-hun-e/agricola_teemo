import { cls } from "@utils/util";
import { fenceAddValidation, fenceDelValidation } from "@utils/fence";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  changeAnimalsUserBoard,
  sendDataUserBoard,
} from "@atom/sendUserBoardChangeData";
import { gamePlayData } from "@atom/gamePlayData";
import {
  animalsType,
  barnType,
  fenceType,
  fieldType,
  roomType,
  seedType,
} from "@constants/cardCase";
import { IFields } from "@ITypes/play";
import { sendChangeSocket } from "@utils/socket";
import { playIndex } from "@atom/lobbyToPlay";

interface Prop {
  client?: WebSocket;
  owner: number;
  type: string;
  fenceList: number[][];
  setFenceList: Function;
  idx: number;
  landInfo: IFields;
  isChecked: boolean[];
  setChecked: Function;
}

const LandBox = ({
  client,
  owner,
  type,
  fenceList,
  setFenceList,
  idx,
  landInfo,
  isChecked,
  setChecked,
}: Prop) => {
  // @ts-ignore
  const { players } = useRecoilValue(gamePlayData);
  const userList = useRecoilValue(playIndex);
  const limit = players[userList[0]].resource.wood as number;
  const setAdditional = useSetRecoilState(sendDataUserBoard);
  const [changeAnimals, setChangeAnimals] = useRecoilState(
    changeAnimalsUserBoard
  );

  // 사이에 fence 세우기
  const fillFence = () => {
    let newFence = [...fenceList];
    newFence[idx] = [1, 2, 3, 4];
    setFenceList(() => newFence);
  };

  // fence 취소하기
  const delFence = () => {
    let newFence = [...fenceList];
    newFence[idx] = [];
    newFence = fenceDelValidation(newFence, idx, isChecked);
    setFenceList(() => newFence);
    changeChecked();

    // todo 선택한 방 filed_type 변경하기
  };

  // fence 추가하기
  const addFence = () => {
    console.log(idx, fenceList[idx], landInfo);
    // fenceValidation isChecked
    let newFence = [...fenceList];
    newFence[idx] = [1, 2, 3, 4];
    newFence = fenceAddValidation(newFence);
    // console.log("newFence", newFence);

    const sum = newFence.reduce((acc, cur) => acc + cur.length, 0);

    if (sum > limit) {
      alert(`${limit}개 이상 선택할 수 없습니다.`);
      return;
    } else {
      // 빈방일 때
      changeChecked();
      if (landInfo?.field_type === "empty") {
        setFenceList(() => newFence);
      }
      // todo 선택한 방 filed_type 변경하기
    }
  };

  // 두번 클릭 시 fence 추가하기 or 취소하기
  const doubleOnClick = () => {
    const input = prompt(
      "방 사이에 울타리를 세우려면 1 입력,\n울타리를 취소하려면 2 입력 하세요 \n(1: 사이에 울타리 or 2 : 울타리 취소)"
    );
    if (input === "1") fillFence();
    if (input === "2") delFence();
  };

  // 땅에 무언가(방)들을 놓는 경우
  const downAnythings = () => {
    changeChecked();
    setAdditional((pre: { positions: [] | "" }) => {
      const tmp: { positions: number[] | "" } = { ...pre };

      // if (tmp.positions) {
      //   tmp.positions = [...tmp.positions, idx];
      // } else {
      //   tmp.positions = [idx];
      // }
      // 없으면 넣고 있으면 추가
      tmp.positions = tmp.positions ? [...tmp.positions, idx] : [idx];

      console.log(tmp);
      return tmp;
    });
  };

  const upAnythings = () => {
    changeChecked();
    setAdditional((pre: { positions: number[] }) => {
      const tmp: { positions: number[] } = { ...pre };
      tmp.positions = tmp.positions.filter((v) => v !== idx);
      return tmp;
    });
  };

  const upBarns = () => {
    changeChecked();
    setAdditional((pre: { barn_positions: number[] }) => {
      const tmp: { barn_positions: number[] } = { ...pre };
      tmp.barn_positions = tmp.barn_positions.filter((v) => v !== idx);
      return tmp;
    });
  };

  const downBarns = () => {
    changeChecked();
    setAdditional((pre: { barn_positions: [] | "" }) => {
      const tmp: { barn_positions: number[] | "" } = { ...pre };
      tmp.barn_positions = tmp.barn_positions
        ? [...tmp.barn_positions, idx]
        : [idx];
      console.log(tmp);
      return tmp;
    });
  };

  // 땅에 무언가(밭, 동물, 씨)를 놓는 경우
  const downAnything = () => {
    changeChecked();
    setAdditional(() => ({ position: idx }));
  };

  const upAnything = () => {
    changeChecked();
    setAdditional(() => ({ position: "" }));
  };

  const downSeed = () => {
    changeChecked();
    setAdditional(() => ({ sow_position: idx, seed: "grain" }));
  };

  const upSeed = () => {
    changeChecked();
    setAdditional(() => ({ position: "", seed: "" }));
  };

  // 내용물 처리
  const inRoom = Object.keys(landInfo.is_in).filter(
    // @ts-ignore
    (key) => landInfo.is_in[key] !== 0
  );
  const isInRoom = inRoom.map((key) => {
    // @ts-ignore
    return `X ${landInfo.is_in[key]}`;
  });

  // 동물 옮기기
  const changeAnimal = () => {
    if (changeAnimals.positions.length === 1) {
      // 데이터 전송
      const sendData = { ...changeAnimals };
      sendData.positions = [...sendData.positions, idx];
      console.log("sendData", sendData);
      // @ts-ignore
      sendChangeSocket(client, owner, sendData);

      //초기화
      setChangeAnimals({
        animals: "",
        positions: [],
      });
    } else {
      // 시작값
      setChangeAnimals(() => ({
        animals: inRoom.join(""),
        positions: [idx],
      }));
    }
  };

  // 어떤 액션할 건지 선택
  const handleOnAction = () => {
    console.log(type);
    // 울타리 치기
    if (fenceType.includes(type)) {
      isChecked[idx] ? doubleOnClick() : addFence();
    }

    // 방 짓기 => 리스트
    else if (roomType.includes(type)) {
      isChecked[idx] ? upAnythings() : downAnythings();
    }

    // 밭 일구기 => 하나
    else if (fieldType.includes(type)) {
      isChecked[idx] ? upAnything() : downAnything();
    }

    // 동물 놓기 => 하나
    else if (animalsType.includes(type)) {
      isChecked[idx] ? upAnything() : downAnything();
    }

    // 씨 뿌리기 => 하나
    else if (seedType.includes(type)) {
      isChecked[idx] ? upSeed() : downSeed();
    } else if (barnType.includes(type)) {
      isChecked[idx] ? upBarns() : downBarns();
    }

    // 동물 옮기기 ("my")
    else {
      changeAnimal();
    }
  };

  const changeChecked = () => {
    setChecked((pre: boolean[]) => {
      const newChecked = [...pre];
      newChecked[idx] = !newChecked[idx];
      return newChecked;
    });
  };

  return (
    <div
      className={cls(
        "w-[100px] h-[100px]  flex justify-center items-center cursor-pointer",
        isChecked[idx] ? "bg-yellow-300" : "bg-demo",
        "border-solid border-red-500",
        fenceList[idx]?.includes(1) ? "border-l-[5px]" : "",
        fenceList[idx]?.includes(2) ? "border-t-[5px]" : "",
        fenceList[idx]?.includes(3) ? "border-r-[5px]" : "",
        fenceList[idx]?.includes(4) ? "border-b-[5px]" : "",
        changeAnimals.positions.includes(idx) ? "bg-red-500" : ""
      )}
      onClick={handleOnAction}
    >
      {/*농장{idx + 1}*/}
      <div className="flex flex-col items-center h-full justify-around w-full">
        <p>{landInfo.field_type !== "empty" ? landInfo.field_type : "빈방"}</p>

        <div className="w-full flex justify-center items-center">
          <div
            className="w-[40px] h-[30px] bg-cover"
            style={{
              backgroundImage: `url('/assets/${inRoom}.png')`,
            }}
          />
          <p>{isInRoom}</p>
        </div>
      </div>
    </div>
  );
};

export default LandBox;
