import React from "react";
import {
  ModalTitle,
  ModalFooter,
  CancelBtn,
  NextBtn,
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
        <ModalFooter>
          <CancelBtn onClick={() => setModalClose()}>Cancel</CancelBtn>
          <NextBtn> Next </NextBtn>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};
export default Modal;
