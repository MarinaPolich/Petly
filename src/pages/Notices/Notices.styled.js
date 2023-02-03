import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const Box = styled.div`
  padding: 42px 0;
  font-family: var(--font-manrope);
  font-style: normal;

  @media ${device.tablet} {
    padding-top: 90px 0;
  }

  @media ${device.desktop} {
    padding-top: 59px 0;
  }
`;

export const NavBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
