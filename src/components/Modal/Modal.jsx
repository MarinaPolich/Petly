import React from "react";
import {
  ModalTitle,
  ModalWrapper,
  CloseIcon,
  ModalContent,
} from "./Modal.styled";

const Modal = ({ active, title, setActive, setModalClose, children }) => {
  return (
    <ModalWrapper actv={active} onClick={() => setActive(!active)}>
      <ModalContent actv={active} onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={() => setModalClose()} width="44px" />
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};
export default Modal;
