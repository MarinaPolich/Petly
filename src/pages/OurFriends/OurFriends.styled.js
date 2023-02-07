import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const Title = styled.h1`
  margin-bottom: 28px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  text-align: center;

  color: var(--black);

  @media ${device.tablet} {
    margin-bottom: 40px;
    font-size: 48px;
  }

  @media ${device.desktop} {
    margin-bottom: 60px;
    font-size: 48px;
  }
`;

export const FriendsWraper = styled.ul`
  width: 100%;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
    justify-content: center;
    grid-gap: 32px;
    margin: 0 auto;
    max-width: 100%;
  }

  @media ${device.desktop} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(393px, 1fr));
    justify-content: center;
    grid-gap: 32px;
    margin: 0 auto;
    max-width: 100%;
  }
`;
