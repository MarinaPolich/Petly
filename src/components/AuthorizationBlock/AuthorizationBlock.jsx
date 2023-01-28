import { Mobile } from "components/Container/Mobile";
import { useDesktopOrTablet } from "hooks/useTablet";
import {
  ButtonBox,
  StyledLink,
  StyledLinkLogin,
  StyledLinkLoginMob,
  StyledLinkMob,
} from "./AuthorizationBlock.styled";

export const AuthorizationBlock = ({ onClick = () => {} }) => {
  const isDesktopOrTablet = useDesktopOrTablet();

  return (
    <ButtonBox>
      <Mobile>
        <StyledLinkLoginMob to="/login" onClick={onClick}>
          login
        </StyledLinkLoginMob>
        <StyledLinkMob to="/register" onClick={onClick}>
          registration
        </StyledLinkMob>
      </Mobile>

      {isDesktopOrTablet && (
        <>
          <StyledLinkLogin to="/login" onClick={onClick}>
            login
          </StyledLinkLogin>
          <StyledLink to="/register" onClick={onClick}>
            registration
          </StyledLink>
        </>
      )}
    </ButtonBox>
  );
};
