import Link from "next/link";
import Modal from "@components/Share/Modal";
import { useEffect, useState } from "react";
import ModalButton from "@components/Button/ModalButton";
import { cls } from "@utils/util";
import { useRecoilState, useSetRecoilState } from "recoil";
import { auth, userInfo } from "@atom/auth";
const Header = () => {
  const [isAuth, setIsAuth] = useRecoilState(auth);
  const setInfo = useSetRecoilState(userInfo);

  useEffect(() => {
    const auth = localStorage.getItem("access_token");
    if (auth) {
      setIsAuth(true);
      const payload = Buffer.from(auth.split(".")[1], "base64");
      const info = JSON.parse(payload.toString());
      setInfo((pre) => ({ ...pre, userId: info.user_id }));
    } else {
      setIsAuth(false);
    }
  }, []);
  return (
    <div className="w-[1280px] h-[80px] flex justify-between items-center">
      <Link
        href="/"
        className="w-[120px] h-full flex justify-center items-center bg-demo "
      >
        <p>Logo</p>
      </Link>
      <ModalButton
        name="Mypage"
        layoutCSS={cls(
          isAuth ? "bg-yellow-200" : "bg-demo",
          "bg-demo h-full w-[80px] rounded-full flex justify-center items-center mr-5"
        )}
      >
        {isAuth ? <p className="">프로필 내용</p> : <p>로그인을 해주세요 </p>}
      </ModalButton>
    </div>
  );
};

export default Header;
