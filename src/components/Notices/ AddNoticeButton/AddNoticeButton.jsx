import SVG from "react-inlinesvg";
import { Mobile } from "components/Container/Mobile";
import { useDesktopOrTablet } from "hooks/useTablet";
import { addBtnIcon } from "assets/icon";
import { AddBtnLabel, AddBtn } from "pages/User/User.styled";
import { Button } from "./AddNoticeButton.styled";

const AddNoticeButton = () => {
  const isDesktopOrTablet = useDesktopOrTablet();

  return (
    <>
      <Mobile>
        <Button>
          <SVG src={addBtnIcon} width={32} height={32} />
          Add pet
        </Button>
      </Mobile>
      {isDesktopOrTablet && (
        <AddBtnLabel>
          Add pet
          <AddBtn>
            <SVG src={addBtnIcon} width={16} height={16} />
          </AddBtn>
        </AddBtnLabel>
      )}
    </>
  );
};

export default AddNoticeButton;
