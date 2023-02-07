import Modal from "components/Modal/Modal";
import { useEffect, useState } from "react";

const ModalNotice = ({ activeModal, setActiveModal }) => {
    const [modalActive, setModalActive] = useState(activeModal);
    
    const closeModal = () => {
      setActiveModal(false);
    };
    
    useEffect(() => {
      setModalActive(activeModal);
    }, [activeModal]);
    useEffect(() => {
      if (modalActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }, [modalActive]);
  return (
    <Modal
      active={activeModal}
      setActive={setActiveModal}
      setModalClose={closeModal}
    >
      {/* <ModalFooter>
        <CancelBtn type="button">Add to</CancelBtn>
        <NextBtn type="button">Contact</NextBtn>
      </ModalFooter> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        molestiae cum quis hic. Asperiores, architecto cumque. Quisquam velit
        aperiam eaque, non minus voluptate nobis. Debitis numquam eum ad omnis
        vitae.
      </p>
    </Modal>
  );
};
export default ModalNotice;
