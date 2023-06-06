import ModalButton from "@components/Button/ModalButton";
import { cls } from "@utils/util";
import { useRecoilValue } from "recoil";
import { auth } from "@atom/auth";
import LinkButton from "@components/Button/LinkButton";
const Header = () => {
  const isAuth = useRecoilValue(auth);

  return (
    <div className="w-[1280px] h-[80px] flex justify-between items-center">
      <LinkButton
        text="logo"
        className="w-[120px] h-full flex justify-center items-center bg-demo"
        href=""
      />
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
