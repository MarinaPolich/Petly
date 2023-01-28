import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "stylesheet/breakpoints";

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    margin-bottom: 30px;
  }

  @media ${device.tabDesk} {
    justify-content: space-between;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 8px 26px;

  background-color: transparent;
  border: 2px solid var(--primary);
  border-radius: var(--border-btn);

  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: var(--black);
  transition: background-color var(--transition), color var(--transition);
  cursor: pointer;

  &:active,
  &.active,
  &:hover,
  &:focus {
    background-color: var(--primary);
    color: var(--white);
  }
`;

export const StyledLinkLogin = styled(StyledLink)`
  margin-right: 20px;
  background-color: var(--primary);
  color: var(--white);

  &:active,
  &.active,
  &:hover,
  &:focus {
    background-color: transparent;
    color: var(--black);
  }
`;

export const StyledLinkMob = styled(StyledLink)`
  width: auto;
  height: 35px;
  font-size: 14px;
`;

export const StyledLinkLoginMob = styled(StyledLink)`
  width: auto;
  height: 35px;
  background-color: var(--primary);
  color: var(--white);
  font-size: 14px;

  @media ${device.mobile} {
    margin-right: 12px;
  }
`;
