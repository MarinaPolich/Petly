import { NavBox, StyledLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavBox>
      <StyledLink to="/news">News</StyledLink>
      <StyledLink to="/notices">Find pet</StyledLink>
      <StyledLink to="/friends">Our friennds</StyledLink>
    </NavBox>
  );
};
