import { atom, RecoilState } from "recoil";

export const playIndex: RecoilState<number[]> = atom({
  key: "playIndex",
  default: [] as number[],
});
