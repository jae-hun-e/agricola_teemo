import { atom, RecoilState } from "recoil";
import { IChatAtom } from "@ITypes/chat";

export const chatState: RecoilState<IChatAtom> = atom({
  key: "chatState",
  default: {
    myChat: "",
    yourChat: "",
  },
});
