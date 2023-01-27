import styled from "styled-components";
import { desktop, tablet } from "constants/responsive";
import { device } from "stylesheet/breakpoints";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${device.mobile} {
    max-height: calc(100vh - 0px);
    overflow: auto;
  }
  @media ${device.tablet} {
    width: ${tablet}px;
    padding: 24px 32px;
  }
  @media ${device.desktop} {
    width: ${desktop}px;
    padding: 20px 16px;
  }
`;
