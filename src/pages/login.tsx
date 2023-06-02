import React from "react";

const KakaoLogIn = () => {
  // 카카오 로그인 함수를 실행시키면 아래에 설정해 놓은 KAKAO_AUTH_URL 주소로 이동한다.
  // 이동 된 창에서 kakao 계정 로그인을 시도할 수 있으며 로그인 버튼 클릭 시 Redirect URI로 이동하면서 빈 화면과 함게 인가코드가 발급된다.(인가코드는 파라미터 값에 들어가 있다!)
  const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  function openWindowPop() {
    const options = `top=${(window.screen.height - 600) / 2}, left=${
      (window.screen.width - 500) / 2
    }, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no`;
    window.open(KAKAO_AUTH_URL, "카카오 로그인", options);
  }

  return (
    <>
      <button onClick={openWindowPop}>kakaoLogin</button>
    </>
  );
};

export default KakaoLogIn;
