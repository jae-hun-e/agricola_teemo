import LoginButton from "@components/Button/LoginButton";
import GameRuleButton from "@components/Button/GameRuleButton";
import Link from "next/link";
import {useRecoilValue} from "recoil";
import {auth} from "@atom/auth";
import LinkButton from "@components/Button/LinkButton";

export default function Home() {
  const isAuth = useRecoilValue(auth);
  return (
    <div className="flex w-[1260px] h-[750px]  bg-[url('/images/main/bg2.png')] bg-opacity-50 bg-cover bg-center bg-no-repeat items-center flex-col \">
      <div className="flex flex-col gap-[30px] mt-[420px]">
        <LoginButton />
        <GameRuleButton />
        {isAuth ? (
          <LinkButton
            className="bg-amber-300 w-[500px] h-[80px] rounded-xl border-4 border-solid border-amber-500 flex justify-center items-center cursor-pointer hover:bg-amber-400"
            text="Start"
          />
        ) : (
          <div
            data-testid={"isNotAuth"}
            className="bg-amber-300 w-[500px] h-[80px] rounded-xl border-4 border-solid border-amber-500 flex justify-center items-center cursor-pointer hover:bg-amber-400"
          >
            로그인을 해주세요
          </div>
        )}
      </div>
    </div>
  );
}
