import { Mobile } from "components/Container/Mobile";
import { useDesktopOrTablet } from "hooks/useTablet";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/auth-selector";
import SVG from "react-inlinesvg";
import {
  ButtonBox,
  StyledLink,
  StyledLinkLogin,
  StyledLinkLoginMob,
  StyledLinkMob,
  StyledLinkPrimaryMinWithIcon,
} from "./AuthorizationBlock.styled";
import { account_circle, account_m } from "assets/icon";

export const AuthorizationBlock = ({ onClick = () => {} }) => {
  const isDesktopOrTablet = useDesktopOrTablet();
  const isLogin = useSelector(getIsLoggedIn);

  return (
    <ButtonBox>
      <Mobile>
        {isLogin ? (
          <StyledLinkPrimaryMinWithIcon to="/user" onClick={onClick}>
            <SVG src={account_m} width={20} height={20} title="to user" />
            <span>account</span>
          </StyledLinkPrimaryMinWithIcon>
        ) : (
          <>
            <StyledLinkLoginMob to="/login" onClick={onClick}>
              login
            </StyledLinkLoginMob>
            <StyledLinkMob to="/register" onClick={onClick}>
              registration
            </StyledLinkMob>
          </>
        )}
      </Mobile>

      {isDesktopOrTablet &&
        (isLogin ? (
          <StyledLinkPrimaryMinWithIcon to="/user" onClick={onClick}>
            <SVG src={account_circle} width={28} height={28} title="to user" />
            <span>account</span>
          </StyledLinkPrimaryMinWithIcon>
        ) : (
          <>
            <StyledLinkLogin to="/login" onClick={onClick}>
              login
            </StyledLinkLogin>
            <StyledLink to="/register" onClick={onClick}>
              registration
            </StyledLink>
          </>
        ))}
    </ButtonBox>
  );
};
