import styled from "styled-components";
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
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    margin-bottom: 30px;
  }

  @media ${device.tabDesk} {
    justify-content: space-between;
  }
`;

export const ButtonNav = styled.button`
  padding: 0;
  margin-left: 20px;
  border: none;
  background-color: transparent;
`;

export const NavMobBox = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 100%;
  height: calc(100vh - 56px);
  margin-top: 46px;
  background-color: var(--bg-body);

  @media ${device.tablet} {
    top: 72px;
    height: calc(100vh - 72px);
    margin-top: 52px;
  }
`;
