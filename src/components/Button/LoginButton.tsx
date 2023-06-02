import SocialLogin from "@components/Share/Login";
import { useEffect, useState } from "react";

import { Simulate } from "react-dom/test-utils";
import Logout from "@components/Share/Logout";
import { useRecoilState } from "recoil";
import { auth } from "@atom/auth";

const LoginButton = () => {
  const [isAuth, setIsAuth] = useRecoilState(auth);
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsAuth(!isAuth);
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
