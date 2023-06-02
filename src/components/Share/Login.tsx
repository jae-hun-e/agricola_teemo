import KakaoLogin from "react-kakao-login";

const SocialKakao = () => {
  const kakaoClientId = "d115e866452615f40c51368a934a188c";
  const kakaoOnSuccess = async (data) => {
    console.log(data);
    const idToken = data.response.id_token; // 인가코드 백엔드로 전달
  };
  const kakaoOnFailure = (error) => {
    console.log(error);
  };
  return (
    <>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </>
  );
};

export default SocialKakao;
