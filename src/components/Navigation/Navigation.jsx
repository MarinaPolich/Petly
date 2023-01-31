import { NavBox, StyledLink } from "./Navigation.styled";

export const Navigation = ({ onClick = () => {} }) => {
  return (
    <NavBox>
      <StyledLink to="/news" onClick={onClick}>
        News
      </StyledLink>
      <StyledLink to="/notices" end={false} onClick={onClick}>
        Find pet
      </StyledLink>
      <StyledLink to="/friends" onClick={onClick}>
        Our friennds
      </StyledLink>
    </NavBox>
  );
};
