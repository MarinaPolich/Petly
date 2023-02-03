import styled from "styled-components";
import { device } from "stylesheet/breakpoints";
import { waveLog_m, waveLog_t, waveLog_d } from "./../../assets/icon/";

export const ContainerReg = styled.main`
  /* position: relative; */
  display: flex;
  align-items: center;
  height: calc(100vh - 59px);
  margin: 0 auto;

  @media ${device.tablet} {
    height: calc(100vh - 96px);
  }

  @media ${device.desktop} {
    height: calc(100vh - 88px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 300px;
    background-image: url(${waveLog_m});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -10;

    @media ${device.tablet} {
      height: 500px;
      background-image: url(${waveLog_t});
    }

    @media ${device.desktop} {
      height: 496px;
      background-image: url(${waveLog_d});
    }
  }
`;
