import Modal from "@components/Share/Modal";
import { ReactNode, useState } from "react";

interface Props {
  layoutCSS?: string;
  buttonCSS?: string;
  name?: string;
  children: ReactNode;
}

const ModalButton = ({ layoutCSS, buttonCSS,name, children }: Props) => {
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
    <div className={layoutCSS}>
      <button
        onClick={() => handleShowModal(1)}
        className={
          buttonCSS
            ? buttonCSS
            : "flex justify-center items-center"
        }
      >
          {name}
      </button>
      <Modal show={showModal} handleClose={() => handleCloseModal(1)}>
        {children}
      </Modal>
    </div>
  );
};

export default ModalButton;
