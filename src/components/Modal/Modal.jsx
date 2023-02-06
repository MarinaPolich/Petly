import React from "react";
import { createPortal } from "react-dom";

import {
  ModalTitle,
  ModalWrapper,
  CloseIcon,
  ModalContent,
} from "./Modal.styled";

const Modal = ({ active, title, setActive, setModalClose, children }) => {
  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <ModalWrapper actv={active} onClick={() => setActive(!active)}>
      <ModalContent actv={active} onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={() => setModalClose()} width="44px" />
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContent>
    </ModalWrapper>,modalRoot
  );
};
export default Modal;
