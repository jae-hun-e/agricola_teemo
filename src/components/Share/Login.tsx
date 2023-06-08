import KakaoLogin from "react-kakao-login";
import KakaoLoginIcon from "@public/icon/kakaoLogin";
import client from "../../apis/api";

const SocialLogin = () => {
  const kakaoSuccess = async (res: any) => {
    client
      .post(`/account/login`, {
        access_token: res.response.access_token,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        window.location.href = "/";
      });
  };

  return (
    <>
      <KakaoLogin
        token={process.env.NEXT_PUBLIC_KAKAO_JS_KEY || ""}
        onSuccess={kakaoSuccess}
        onFail={console.error}
        onLogout={console.info}
        render={({ onClick }) => {
          return (
            <div
              className="flex items-center justify-center px-4  w-[500px] h-[80px] border-4 border-solid border-yellow-500 rounded-xl bg-yellow-200 hover:bg-yellow-400"
              onClick={(e) => {
                e.preventDefault();
                onClick();
              }}
            >
              <KakaoLoginIcon />
            </div>
          );
        }}
      />
    </>
  );
};

export default SocialLogin;
