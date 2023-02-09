import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  text-align: center;

  color: var(--black);

  @media ${device.tablet} {
    font-size: 48px;
  }

  @media ${device.desktop} {
    font-size: 48px;
  }
`;

export const TitleError = styled(Title)`
  color: var(--warning);
`;

export const StyledLink = styled(NavLink)`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  text-align: center;

  color: var(--blue);

  @media ${device.tablet} {
    font-size: 48px;
  }

  @media ${device.desktop} {
    font-size: 48px;
  }
`;
