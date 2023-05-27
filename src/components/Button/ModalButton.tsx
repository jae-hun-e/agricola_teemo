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

  const toggleModal = () => {
    // console.log("모달 닫기");
    setShowModal(!showModal);
  };

  return (
    <div className={layoutCSS}>
      <button
        type="button"
        onClick={toggleModal}
        className="flex justify-center items-center w-full h-full"
      >
        {name}
      </button>
      <Modal
        show={showModal}
        handleClose={toggleModal}
        childrenCSS={childrenCSS}
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalButton;
