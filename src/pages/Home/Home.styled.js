import styled from "styled-components";
import { device } from "stylesheet/breakpoints";
import {
  pedigree_dog_d,
  pedigree_dog_m,
  pedigree_dog_t,
  BgD,
  BgM,
  BgT,
  Union,
} from "assets/image/index";

export const Container = styled.div`
  padding-top: 60px;
  min-height: 545px;
  max-width: 480px;
  margin: 0 auto;
  @media ${device.tablet} {
    padding-top: 88px;
    max-width: 768px;
    min-height: 1121px;
  }
  @media ${device.desktop} {
    padding-top: 92px;
    height: calc(100vh - 88px);
    max-width: 1280px;
  }

  &::after {
    content: "";
    z-index: -11;
    min-height: 543px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    background-image: url(${pedigree_dog_m}), url(${BgM});
    background-size: 320px 337px, 100vw 470px;

    @media ${device.tablet} {
      min-height: 1088px;
      height: calc(100vh - 96px);
      background-image: url(${pedigree_dog_t}), url(${BgT});
      background-size: 645px 715px, 100vw 1033px;
      background-position: bottom;
    }

    @media ${device.desktop} {
      min-height: 1108px;
      background-image: url(${pedigree_dog_d}), url(${BgD}), url(${Union});
      background-size: 590px 640px, 100vw calc(100vw * 0.375), 92px 89px;
      background-position-x: calc(50% + 330px), center, calc(50% + 118px);
      background-position-y: bottom, bottom, calc(50% - 204px);
    }
  }
`;

export const Text = styled.p`
  max-width: 280px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;

  color: #000000;

  @media ${device.tabDesk} {
    max-width: 588px;
    font-size: 68px;
    line-height: 1.47;
  }
`;
