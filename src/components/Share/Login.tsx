import { signIn, useSession, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  console.log("session", session);
  if (session) {
    return (
      <>
        {session.user?.name}님 반갑습니다 <br />
        <button onClick={() => signOut()}>로그아웃</button>
      </>
    );
  }
  return (
    <>
      로그인이 되지 않았습니다. <br />
      <button onClick={() => signIn("kakao")}>로그인</button>
    </>
  );
}
