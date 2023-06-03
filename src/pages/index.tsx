import LoginButton from "@components/Button/LoginButton";
import GameRuleButton from "@components/Button/GameRuleButton";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { auth } from "@atom/auth";

export default function Home() {
  const isAuth = useRecoilValue(auth);
  return (
    <div className="flex items-center flex-col">
      <div className="w-[1040px] h-[310px] bg-demo">
        아그리지콜라 메인 이미지
      </div>
      <div className="flex flex-col gap-[50px]">
        <LoginButton />
        <GameRuleButton />
        {isAuth ? (
          <Link
            href="/lobby"
            className="w-[500px] h-[80px] bg-yellow-200 flex justify-center items-center cursor-pointer hover:bg-hover"
          >
            <p>Start</p>
          </Link>
        ) : (
          <div className="w-[500px] h-[80px] bg-demo flex justify-center items-center cursor-pointer hover:bg-hover">
            로그인을 해주세요
          </div>
        )}
      </div>
    </div>
  );
}
