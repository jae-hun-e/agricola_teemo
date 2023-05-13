import { ReactNode } from "react";
import { cls } from "@utils/util";

interface Props {
    handleClose: () => void;
    show: boolean;
    children: ReactNode;
}

const Modal = ({ handleClose, show, children }: Props) => {
    return (
        <div
            className={cls(
                show ? "block" : "hidden",
                "z-30 w-full h-full bg-black bg-opacity-40 flex justify-center items-center fixed top-0 left-0 "
            )}
        >
            <div className="w-[720px] h-[500px] pt-[100px] bg-gray-300 flex flex-col justify-center items-center  overflow-auto relative shadow-inner">
                <div className="w-full h-full">{children}</div>
                <button
                    onClick={handleClose}
                    className="w-[150px] h-[50px] text-11xl hover:bg-amber-100 hover:opacity-80 cursor-pointer absolute bottom-10 bg-amber-200 rounded-xl"
                >
                    close
                </button>
            </div>
        </div>
    );
};

export default Modal;
