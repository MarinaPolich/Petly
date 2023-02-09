import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const Title = styled.h1`
  margin-bottom: 28px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  text-align: center;

  color: var(--black);

  @media ${device.tablet} {
    margin-bottom: 40px;
    font-size: 48px;
  }

  @media ${device.desktop} {
    margin-bottom: 60px;
    font-size: 48px;
  }
`;

export const TitleError = styled(Title)`
  color: var(--warning);
`;

export const StyledLink = styled(NavLink)`
  color: var(--blue);
  font-size: 12px;
  line-height: 1.333;
  text-transform: capitalize;
`;
