import SVG from "react-inlinesvg";
import { Mobile } from "components/Container/Mobile";
import { burger, petly, petly_m } from "assets/icon";
import { Tablet } from "components/Container/Tablet";
import {
  ButtonBox,
  ButtonNav,
  HeaderBox,
  StyledLink,
  StyledLinkLogin,
} from "./Header.styled";
import { Desktop } from "components/Container/Desktop";
import { Navigation } from "components/Navigation/Navigation";

export const Header = () => {
  return (
    <HeaderBox>
      <Mobile>
        <SVG src={petly_m} width={82} height={42} title="logo" />
        <ButtonNav type="button">
          <SVG src={burger} width={40} height={40} title="menu" />
        </ButtonNav>
      </Mobile>
      <Tablet>
        <SVG src={petly} width={94} height={48} title="logo" />
        <ButtonBox>
          <StyledLinkLogin to="/login">login</StyledLinkLogin>
          <StyledLink to="/register">registration</StyledLink>
          <ButtonNav type="button">
            <SVG src={burger} width={40} height={40} title="menu" />
          </ButtonNav>
        </ButtonBox>
      </Tablet>
      <Desktop>
        <ButtonBox>
          <SVG src={petly} width={94} height={48} title="logo" />
          <Navigation />
        </ButtonBox>
        <ButtonBox>
          <StyledLinkLogin to="/login">login</StyledLinkLogin>
          <StyledLink to="/register">registration</StyledLink>
        </ButtonBox>
      </Desktop>
    </HeaderBox>
  );
};
