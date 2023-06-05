import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const { isOpen, children, parentClases, modalOuterClick } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (typeof window !== "object") return null;

  if (isOpen) {
    return createPortal(
      <div
        className={`w-screen h-screen fixed  left-0 right-0 bottom-0 top-0 z-50 ${parentClases} md:hidden`}
        // style={{ background: "rgba(0, 0, 0, 0.7)" }}
        onClick={modalOuterClick}
      >
        {children}
      </div>,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};

export default Modal;
