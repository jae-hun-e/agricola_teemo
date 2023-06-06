import { IPlayData } from "@ITypes/play";
import { atom, RecoilState } from "recoil";
import { playDataInit } from "../constants/demoData";

export const playData: RecoilState<IPlayData> = atom({
  key: "playData",
  default: playDataInit,
});
