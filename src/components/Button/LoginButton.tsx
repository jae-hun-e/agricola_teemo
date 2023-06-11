import SocialLogin from "@components/Share/Login";
import Logout from "@components/Share/Logout";
import { useRecoilValue } from "recoil";
import { auth } from "@atom/auth";

const LoginButton = () => {
  const isAuth = useRecoilValue(auth);

  return (
    <button className="w-[500px] h-[80px] rounded-xl bg-yellow-200 cursor-pointer hover:bg-hover">
      {isAuth ? <Logout /> : <SocialLogin />}
    </button>
  );
};

export default LoginButton;
