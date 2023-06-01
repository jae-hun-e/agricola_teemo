import LoginButton from "@components/Button/LoginButton";
import GameRuleButton from "@components/Button/GameRuleButton";
import Link from "next/link";
import Login from "@components/Share/Login";

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <div className="w-[1040px] h-[310px] bg-demo">
        아그리지콜라 메인 이미지
      </div>
      <div className="flex flex-col gap-[50px]">
        <Login />
        <GameRuleButton />
        <Link
          href="/lobby"
          className="w-[500px] h-[80px] bg-demo flex justify-center items-center"
        >
          <p>Start</p>
        </Link>
      </div>
    </div>
  );
}
