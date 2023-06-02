// import { useEffect } from "react";
//
// const KakaoAuthHandler = (props) => {
//   useEffect(() => {
//     // 꺼내온 code(인가코드)를 미들웨어를 통해 백엔드로 넘겨준다.
//     const code = new URL(window.location.href).searchParams.get("code");
//     console.log(code);
//   }, []);
// };
//
// export default KakaoAuthHandler;

import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

interface ResponseType {
  ok: boolean;
  error?: any;
}

const Kakao: NextPage = () => {
  const router = useRouter();
  const { code: authCode, error: kakaoServerError } = router.query;

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      // const res: ResponseType = axios
      //   .post("/api/users/kakao-login", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       authCode: code,
      //     }),
      //   })
      //   .then((res) => console.log(res));
      const URL = "http://localhost:8000/login";

      try {
        const response: ResponseType = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            authCode: code,
          }),
        }).then((res) => res.json());

        if (response.ok) {
          // 성공하면 홈으로 리다이렉트
          // router.push("/");
          window.close();
        }
      } catch (e) {
        console.log("error", e);
        window.close();
      }
    },
    [router]
  );

  useEffect(() => {
    if (authCode) {
      loginHandler(authCode);

      // 인가코드를 제대로 못 받았을 경우에 에러 페이지를 띄운다.
    } else if (kakaoServerError) {
      router.push("/notifications/authentication-failed");
    }
  }, [loginHandler, authCode, kakaoServerError, router]);

  return <h2>로그인 중입니다..</h2>;
};

export default Kakao;
