import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const NewsContainer = styled.section`
  padding-top: 42px;
  padding-bottom: 100px;

  @media ${device.tablet} {
    padding-top: 88px;
  }

  @media ${device.desktop} {
    padding-top: 69px;
  }
`;

export const NewsTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: var(--black);
  margin-bottom: 28px;

  @media ${device.tablet} {
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;

    text-align: center;

    color: var(--black);
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 40px;
  flex-direction: column;

  
    @media ${device.tabDesk} {
        flex-direction: row;
    flex-wrap: wrap;
    gap:32px;
    }
    
   
    
    
  
`;
