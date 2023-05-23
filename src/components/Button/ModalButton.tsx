import Modal from "@components/Share/Modal";
import { ReactNode, useState } from "react";

interface Props {
  layoutCSS?: string;
  name?: string;
  children: ReactNode;
  childrenCSS?: string;
}

const ModalButton = ({ layoutCSS, name, children, childrenCSS }: Props) => {
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
        className="flex justify-center items-center w-full h-full"
      >
        {name}
      </button>
      <Modal
        show={showModal}
        handleClose={() => handleCloseModal(1)}
        childrenCSS={childrenCSS}
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalButton;
