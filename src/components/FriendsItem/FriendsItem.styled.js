import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const FriendsContainer = styled.section`
  padding-top: 42px;
  padding-bottom: 100px;

  @media ${device.tablet} {
    padding-top: 90px;
  }

  @media ${device.desktop} {
    padding-top: 60px;
  }
`;

export const StyledLi = styled.li`
  padding: 12px 4px;
  margin-bottom: 12px;
  background: var(--white);
  border-radius: 20px;
  filter: drop-shadow(7px 4px 14px rgba(49, 21, 4, 0.07));
  text-align: center;

  @media ${device.tabDesk} {
    margin: 0;
    padding: 16px 11px 16px 4px;
    border-radius: 40px;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
`;
export const ImageBox = styled.div`
  display: block;
  margin: 0 auto;
  min-width: 110px;
  width: 45%;
  max-width: 197px;
  height: auto;
  margin-left: 0;
  margin-right: 12px;

  @media ${device.tablet} {
    width: 120px;
    height: 85px;
    margin-right: 14px;
  }

  @media ${device.desktop} {
    width: 158px;
    height: 112px;
    margin-right: 16px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`;

export const InfoWrapper = styled.div`
  width: 55%;
  max-width: 55%;
  text-align: start;

  @media ${device.tabDesk} {
    width: 100%;
  }
`;

export const StyledHeader = styled.h3`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.333;
  text-decoration-line: underline;
  color: var(--primary);

  & a {
    text-decoration: none;
    color: currentColor;
  }

  @media ${device.tablet} {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.375;
  }

  @media ${device.desktop} {
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 1.35;
  }
`;

export const StyledText = styled.p`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  font-style: normal;
  color: var(--black);
  transition: color var(--transition);

  & a {
    font-style: normal;
    text-decoration: none;
    color: currentColor;
  }

  & address a {
    text-decoration: underline;
    font-style: normal;
    color: currentColor;
  }

  &:hover,
  :focus {
    color: var(--primary);
  }

  @media ${device.tablet} {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 1.357;
  }

  @media ${device.desktop} {
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 1.375;
  }
`;
