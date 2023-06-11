import { ReactNode } from "react";
import { cls } from "@utils/util";

interface Props {
  handleClose: () => void;
  show: boolean;
  children: ReactNode;
  childrenCSS?: string;
  type?: string;
  handleAction?: () => void;
}

const Modal = ({
  handleClose,
  show,
  children,
  childrenCSS,
  type,
  handleAction,
}: Props) => {
  const onClickAction = () => {
    handleAction && handleAction();
    handleClose();
  };
  return (
    <div
      className={cls(
        show ? "block" : "hidden",
        "z-30 bg-black bg-opacity-40 flex justify-center items-center fixed top-0 left-0 w-full h-full"
      )}
    >
      <div
        className={cls(
          "bg-gray-300 flex flex-col justify-center items-center  overflow-auto relative shadow-inner",
          childrenCSS ? childrenCSS : "w-[400px] h-[600px]"
        )}
      >
        <div className="w-full h-full flex justify-center items-start">
          {children}
        </div>
        <div className="absolute bottom-10">
          {type === "action" && (
            <button
              type="button"
              onClick={onClickAction}
              className="w-[150px] h-[50px] text-11xl hover:bg-amber-100 hover:opacity-80 cursor-pointer bg-amber-200 rounded-xl mr-[20px]"
            >
              action
            </button>
          )}

          <button
            type="button"
            onClick={handleClose}
            className="w-[150px] h-[50px] text-11xl hover:bg-amber-100 hover:opacity-80 cursor-pointer  bg-amber-200 rounded-xl"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
