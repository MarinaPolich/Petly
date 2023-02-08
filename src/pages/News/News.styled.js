import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const NewsContainer = styled.section`
  padding-top: 42px;
  padding-bottom: 100px;

  @media ${device.tablet} {
    padding-top: 90px;
  }

  @media ${device.desktop} {
    padding-top: 60px;
  }
`;

export const NewsTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  text-align: center;
  color: var(--black);
  margin-bottom: 28px;

  @media ${device.tabDesk} {
    margin-bottom: 40px;
    font-size: 48px;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 40px;
  flex-direction: column;

  @media ${device.tabDesk} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }
`;
