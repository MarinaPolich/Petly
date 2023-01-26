import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export const Modal = () => {
  return createPortal(<div></div>, modalRoot);
};
