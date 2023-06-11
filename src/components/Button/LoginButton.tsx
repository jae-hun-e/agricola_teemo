import SocialLogin from "@components/Share/Login";
import { useEffect } from "react";
import Logout from "@components/Share/Logout";
import { useRecoilState, useRecoilValue } from "recoil";
import { auth, userInfo } from "@atom/auth";

const LoginButton = () => {
  const isAuth = useRecoilValue(auth);

  return (
    <button className="w-[500px] h-[80px] rounded-xl bg-yellow-200 cursor-pointer hover:bg-hover">
      {isAuth ? <Logout /> : <SocialLogin />}
    </button>
  );
};

export default LoginButton;
