import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const Box = styled.div`
  padding-top: 42px;
  font-family: var(--font-manrope);
  font-style: normal;

  @media ${device.tablet} {
    padding-top: 90px;
  }

  @media ${device.desktop} {
    padding-top: 60px;
  }
`;

export const NavBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
