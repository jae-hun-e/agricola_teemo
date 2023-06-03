import { atom, RecoilState } from "recoil";

export const auth: RecoilState<boolean> = atom({
  key: "isAuth",
  default: false,
});

export const userInfo: RecoilState<object> = atom({
  key: "userInfo",
  default: {},
});
