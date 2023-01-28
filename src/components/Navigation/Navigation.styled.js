import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "stylesheet/breakpoints";

export const NavBox = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${device.desktop} {
    width: auto;
    flex-direction: row;
    margin-left: 50px;
  }
`;

export const StyledLink = styled(NavLink)`
  width: 100%;
  padding: 20px 0;
  text-decoration: none;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.375;
  text-align: center;
  letter-spacing: 0.04em;
  white-space: nowrap;
  color: var(--text-nav);
  transition: color var(--transition), text-decoration-line var(--transition);
  cursor: pointer;

  &:active,
  &.active,
  &:hover,
  &:focus {
    text-decoration-line: underline;
    color: var(--primary);
  }

  @media ${device.tablet} {
    padding: 30px 0;
    font-size: 48px;
  }

  @media ${device.desktop} {
    padding: 10px 30px;
    font-size: 20px;
    line-height: 1.35;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
