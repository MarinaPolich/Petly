import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "stylesheet/breakpoints";

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 16px;

  @media ${device.tabDesk} {
    padding-top: 0;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonNav = styled.button`
  padding: 0;
  margin-left: 20px;
  border: none;
  background-color: transparent;
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
  &:hover,
  &:focus {
    background-color: var(--primary);
    color: var(--white);
  }

  @media ${device.mobile} {
    margin-right: 30px;
    margin-bottom: 0;
  }
`;

export const StyledLinkLogin = styled(StyledLink)`
  margin-right: 20px;
  background-color: var(--primary);
  color: var(--white);

  &:hover,
  &:focus {
    background-color: transparent;
    color: var(--black);
  }
`;
