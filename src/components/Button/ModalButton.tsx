import Modal from "@components/Share/Modal";
import { ReactNode, useState } from "react";

interface Props {
  layoutCSS?: string;
  name?: string;
  children: ReactNode;
  childrenCSS?: string;
  type?: string;
  handleAction?: () => void;
}

const ModalButton = ({
  layoutCSS,
  name,
  children,
  childrenCSS,
  type,
  handleAction,
}: Props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={layoutCSS} data-testid={"ModalButton"}>
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
        type={type}
        handleAction={handleAction}
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalButton;
