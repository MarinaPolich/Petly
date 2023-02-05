import SVG from "react-inlinesvg";
import { Mobile } from "components/Container/Mobile";
import { useDesktopOrTablet } from "hooks/useTablet";
import { addBtnIcon } from "assets/icon";
import { AddBtnLabel, AddBtn } from "pages/User/User.styled";
import { Button } from "./AddNoticeButton.styled";
import AddNoticesModal from '../AddNoticesModal/AddNoticesModal'
import { useState } from "react";


const AddNoticeButton = () => {
  const isDesktopOrTablet = useDesktopOrTablet();
  const [activeModal, setActiveModal] = useState(false) ;

  return (
    <>
      <Mobile>
        <Button onClick={() => setActiveModal(true)}>
          <SVG src={addBtnIcon} width={32} height={32} />
          Add pet
        </Button>
      </Mobile>
      {isDesktopOrTablet && (
        <AddBtnLabel>
          Add pet
          <AddBtn onClick={() => setActiveModal(true)}>
            <SVG src={addBtnIcon} width={16} height={16} />
          </AddBtn>
        </AddBtnLabel>
      )}
      <AddNoticesModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
    </>
  );
};

export default AddNoticeButton;
