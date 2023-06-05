import LoginButton from "@components/Button/LoginButton";
import GameRuleButton from "@components/Button/GameRuleButton";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { auth } from "@atom/auth";
import LinkButton from "@components/Button/LinkButton";

export default function Home() {
  const isAuth = useRecoilValue(auth);
  return (
    <div className="flex items-center flex-col">
      <div className="w-[1040px] h-[310px] bg-demo bg-[url('/images/main/bg.jpeg')] bg-cover"></div>
      <div className="flex flex-col gap-[50px] mt-[30px]">
        <LoginButton />
        <GameRuleButton />
        {isAuth ? (
          <LinkButton
            className="w-[500px] h-[80px] bg-yellow-200 flex justify-center items-center cursor-pointer hover:bg-hover"
            text="Start"
          />
        ) : (
          <div
            data-testid={"isNotAuth"}
            className="w-[500px] h-[80px] bg-demo flex justify-center items-center cursor-pointer hover:bg-hover"
          >
            로그인을 해주세요
          </div>
        )}
      </div>
    </div>
  );
}
