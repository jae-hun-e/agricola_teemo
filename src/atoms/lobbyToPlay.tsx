import { atom, RecoilState } from "recoil";

export const playIndex: RecoilState<number[]> = atom({
  key: "playIndex",
  default: [1, 2, 3, 4],
});
