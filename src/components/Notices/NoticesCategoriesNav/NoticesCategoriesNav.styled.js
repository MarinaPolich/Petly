import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const List = styled.ul`
  display: flex;
  margin-bottom: 30px;
  gap: 12px;
  flex-wrap: wrap;

  list-style: none;

  @media ${device.tabDesk} {
    margin-bottom: 60px;
    gap: 16px 12px;
  }
`;

export const ListItem = styled.li`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 28px;
  border: 2px solid var(--primary);
  border-radius: var(--border-btn);

  background-color: var(--white);

  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  text-decoration: none;

  color: var(--black);

  &.active {
    color: var(--white);
    background: var(--primary);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: var(--white);
    background: var(--primary);
  }

  @media ${device.tabDesk} {
    padding: 10px 28px;

    font-size: 20px;
    line-height: 1.35;
  }
`;
