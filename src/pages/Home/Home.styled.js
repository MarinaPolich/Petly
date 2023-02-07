import styled from "styled-components";
import { device } from "stylesheet/breakpoints";
import { Union } from "assets/image/index";
import { wave_m, wave_t, wave_d, wave_d2 } from "./../../assets/icon/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;

  height: calc(100vh - 59px);
  padding-top: 60px;
  overflow: hidden;

  @media ${device.tablet} {
    height: calc(100vh - 96px);
    padding-top: 88px;
  }

  @media ${device.desktop} {
    align-items: start;
    padding-top: 92px;
    height: calc(100vh - 88px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 59px);
    background-image: url(${wave_m});
    background-repeat: no-repeat;
    background-size: 100vw;
    background-position: bottom left;
    z-index: -10;

    @media ${device.tablet} {
      height: calc(100vh - 114px);
      background-image: url(${wave_t});
      background-position: left;
    }

    @media ${device.desktop} {
      min-height: 100vh;
      background-image: url(${wave_d2}), url(${wave_d}), url(${Union});
      background-size: 40vw calc(90vw * 0.375), 100vw calc(100vw * 0.375),
        92px 89px;
      background-position-x: right, left, calc(50% + 118px);
      background-position-y: bottom, bottom, calc(50% - 204px);
    }
  }
`;

export const Text = styled.p`
  max-width: 280px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;

  color: var(--black);

  @media ${device.tabDesk} {
    max-width: 588px;
    font-size: 68px;
    line-height: 1.47;
  }
`;

export const Thumba = styled.div`
  width: 100%;
  aspect-ratio: 0.949;
  object-fit: cover;
  z-index: -15px;

  @media ${device.mobile} {
    width: calc(100% + 40px);
    margin-left: -20px;
    margin-right: -20px;
  }

  @media ${device.tablet} {
    aspect-ratio: 0.902;
  }

  @media ${device.desktop} {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    aspect-ratio: 0.922;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  @media ${device.tablet} {
    width: auto;
    position: absolute;
    bottom: 0;
  }
`;
