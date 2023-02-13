import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import {
  ModalTitle,
  ModalWrapper,
  CloseIcon,
  ModalContent,
} from "./Modal.styled";

const Modal = ({ active, title,width, setModalClose, children }) => {
  const modalRoot = document.querySelector("#modal-root");
  const handleCloseByEsc = (e) => {
    if (e.code === "Escape") {
     setModalClose()
    }
  };
useEffect(() => {
  window.addEventListener("keydown", handleCloseByEsc);
  return () => {
    window.removeEventListener("keydown", handleCloseByEsc);
  };
});
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
     setModalClose()
    }
  };
  

  return createPortal(
    <ModalWrapper actv={active} onClick={handleBackdropClick}>
      <ModalContent actv={active} onClick={(e) => e.stopPropagation()} width={width}>
        <CloseIcon onClick={() => setModalClose()} width="44px" />
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContent>
    </ModalWrapper>,
    modalRoot
  );
};
export default Modal;
