import { atom, RecoilState, selector } from "recoil";
import { IPlayData } from "@ITypes/play";
import { playDataInit } from "@constants/demoData";

export const gamePlayData: RecoilState<IPlayData | object> = atom({
  key: "playInitData",
  default: {},
});

export const newData = selector({
  key: "userSubBoardData",
  get: async ({ get }) => {
    const response = await get(gamePlayData);
    return response;
  },
});
