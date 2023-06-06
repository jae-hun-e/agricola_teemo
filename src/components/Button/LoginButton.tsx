import SocialLogin from "@components/Share/Login";
import { useEffect } from "react";
import Logout from "@components/Share/Logout";
import { useRecoilState } from "recoil";
import { auth, userInfo } from "@atom/auth";

const LoginButton = () => {
  const [isAuth, setIsAuth] = useRecoilState(auth);
  const [userinfo, setInfo] = useRecoilState(userInfo);
  console.log("info2", userinfo);

  useEffect(() => {
    const auth = localStorage.getItem("access_token");
    if (auth) {
      setIsAuth(true);
      console.log("JWT", auth);
      const payload = Buffer.from(auth.split(".")[1], "base64");
      const info = JSON.parse(payload.toString());
      setInfo((pre) => ({ ...pre, userId: info.user_id }));
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <button className="w-[500px] h-[80px] bg-yellow-200 cursor-pointer hover:bg-hover">
      {isAuth ? <Logout /> : <SocialLogin />}
    </button>
  );
};

export default LoginButton;
