import Link from "next/link";
import Modal from "@components/Share/Modal";
import { useState } from "react";
import ModalButton from "@components/Button/ModalButton";
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (idx: number) => {
    console.log("모달 열기");
    setShowModal(!showModal);
  };

  const handleCloseModal = (idx: number) => {
    console.log("모달 닫기");
    setShowModal(!showModal);
  };

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
        layoutCSS="bg-demo h-full w-[80px] rounded-full flex justify-center items-center mr-5"
      >
        <p className="">프로필 내용</p>
      </ModalButton>
    </div>
  );
};

export default Header;
