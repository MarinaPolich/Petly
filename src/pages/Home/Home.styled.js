import styled from "styled-components";
import { device } from "stylesheet/breakpoints";
import {
  pedigree_dog_d,
  pedigree_dog_m,
  pedigree_dog_t,
  BgD,
  BgD2x,
  BgM,
  BgM2x,
  BgT,
  BgT2x,
  Union,
  Union2x,
} from "assets/image/index";

export const Container = styled.div`
  height: calc(100vh - 59px);
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
  &::after {
    content: "";
    z-index: -11;
    height: calc(100vh - 59px);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    background-image: url(${pedigree_dog_m}), url(${BgM});
    background-size: 320px 337px, 100vw 470px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${pedigree_dog_m}), url(${BgM2x});
    }
    @media screen and (min-width: 768px) {
      min-height: 1108px;
      height: calc(100vh - 96px);
      background-image: url(${pedigree_dog_t}), url(${BgT});
      background-size: 645px 715px, 100vw 1033px;
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${pedigree_dog_t}), url(${BgT2x});
      }
    }
    @media screen and (min-width: 1280px) {
      height: calc(100vh - 88px);
      background-image: url(${pedigree_dog_d}), url(${BgD}), url(${Union});
      background-size: 590px 640px, 100vw calc(100vw * 0.375), 92px 89px;
      background-position-x: calc(50% + 330px), center, calc(50% + 118px);
      background-position-y: bottom, bottom, calc(50% - 204px);
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${pedigree_dog_d}), url(${BgD2x}), url(${Union2x});
      }
    }
  }
`;

export const Text = styled.p`
  padding-top: 60px;
  max-width: 280px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;

  color: #000000;

  @media ${device.tabDesk} {
    padding-top: 88px;
    max-width: 588px;
    font-size: 68px;
    line-height: 1.47;

    color: #000000;
  }
`;

// export const HomeSection = styled.section`

// `;
