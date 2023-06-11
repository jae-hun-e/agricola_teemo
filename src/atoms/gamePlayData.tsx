import { atom } from "recoil";
import { IPlayData } from "@ITypes/play";

export const gamePlayData = atom<IPlayData>({
  key: "playInitData",
  default: {} as IPlayData,
});
