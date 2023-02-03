import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const BoxList = styled.ul`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  align-items: center;

  @media ${device.mobile} {
    justify-content: center;
  }
`;
