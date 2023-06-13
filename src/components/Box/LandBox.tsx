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
import { sendChangeSocket } from "@apis/socket";
import { playIndex } from "@atom/lobbyToPlay";

interface Prop {
  house_type: string;
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
  house_type,
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

    // todo 선택한 방 filed_type 변경하기
  };

  // fence 추가하기
  const addFence = () => {
    // console.log(idx, fenceList[idx], landInfo);
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
    setAdditional((pre: { positions: [] | "" }) => {
      const tmp: { positions: number[] | "" } = { ...pre };

      // if (tmp.positions) {
      //   tmp.positions = [...tmp.positions, idx];
      // } else {
      //   tmp.positions = [idx];
      // }
      // 없으면 넣고 있으면 추가
      tmp.positions = tmp.positions ? [...tmp.positions, idx] : [idx];
      return tmp;
    });
  };

  const upAnythings = () => {
    setAdditional((pre: { positions: number[] }) => {
      const tmp: { positions: number[] } = { ...pre };
      tmp.positions = tmp.positions.filter((v) => v !== idx);
      return tmp;
    });
  };

  const upBarns = () => {
    setAdditional((pre: { barn_positions: number[] }) => {
      const tmp: { barn_positions: number[] } = { ...pre };
      tmp.barn_positions = tmp.barn_positions.filter((v) => v !== idx);
      return tmp;
    });
  };

  const downBarns = () => {
    setAdditional((pre: { barn_positions: [] | "" }) => {
      const tmp: { barn_positions: number[] | "" } = { ...pre };
      tmp.barn_positions = tmp.barn_positions
        ? [...tmp.barn_positions, idx]
        : [idx];

      return tmp;
    });
  };

  // 땅에 무언가(밭, 동물, 씨)를 놓는 경우
  const downAnything = () => {
    setAdditional(() => ({ position: idx }));
  };

  const upAnything = () => {
    setAdditional(() => ({ position: "" }));
  };

  const downSeed = () => {
    setAdditional(() => ({ sow_position: idx, seed: "grain" }));
  };

  const upSeed = () => {
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

      // @ts-ignore
      sendChangeSocket(client, owner, sendData);

      //초기화
      setChangeAnimals({
        animals: "",
        positions: [],
      });
      setChecked((pre: boolean[]) => {
        const newChecked = Array.from({ length: pre.length }, () => false);
        return newChecked;
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
    changeChecked();
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

  // 체크박스
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
        "w-[100px] h-[100px]  flex justify-center items-center cursor-pointer hover:opacity-50",
        "border-solid border-red-500",
        isChecked[idx] ? "opacity-50" : "",
        fenceList[idx]?.includes(1) ? "border-l-[5px]" : "",
        fenceList[idx]?.includes(2) ? "border-t-[5px]" : "",
        fenceList[idx]?.includes(3) ? "border-r-[5px]" : "",
        fenceList[idx]?.includes(4) ? "border-b-[5px]" : "",
        changeAnimals.positions.includes(idx) ? "bg-red-500" : ""
      )}
      onClick={handleOnAction}
      style={{
        backgroundColor: `${
          landInfo.field_type === "room" && house_type === "wood"
            ? "#8B4513"
            : house_type === "clay"
            ? "#FFDAB9"
            : house_type === "stone"
            ? "#808080"
            : "#D9D9D9"
        }`,
      }}
    >
      {/*농장{idx + 1}*/}
      <div className="flex flex-col items-center h-full justify-around w-full">
        <div className="flex w-2/3 justify-around">
          {/*barn UI*/}
          {landInfo.is_barn && (
            <div
              className="w-[30px] h-[30px] bg-cover"
              style={{
                backgroundImage: `url('/assets/barn.png')`,
              }}
            />
          )}
          <p>
            {landInfo.field_type !== "empty" ? landInfo.field_type : "빈방"}
          </p>
        </div>

        {/*resource UI*/}
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
