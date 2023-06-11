import { atom, RecoilState } from "recoil";

export const auth: RecoilState<boolean> = atom({
  key: "isAuth",
  default: false,
});

interface IUserInfo {
  userId: number;
}
export const userInfo: RecoilState<IUserInfo> = atom({
  key: "userInfo",
  default: { userId: 1 },
});
