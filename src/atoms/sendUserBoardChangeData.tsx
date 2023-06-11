import { atom, RecoilState } from "recoil";

export const sendDataUserBoard = atom({
  key: "changeUserBoard",
  default: {},
});

interface IChangeAnimals {
  animals: string;
  positions: number[];
}

export const changeAnimalsUserBoard: RecoilState<IChangeAnimals> = atom({
  key: "changeAnimalsUserBoard",
  default: {
    animals: "",
    positions: [] as number[],
  },
});
