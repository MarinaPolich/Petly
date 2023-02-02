import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const StyledLi = styled.li`
display: flex;
flex-direction: column;
  &::before {
    display: inline-block;
    content: "";
    width: 200px;
    height: 4px;

    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
    border-radius: 40px;
    margin-bottom: 4px;

    
  }

  @media ${device.tablet} {
    flex-basis: calc((100% - 32px) / 2);

    &::before {
      display: inline-block;
      content: "";
      width: 280px;
      height: 8px;

      background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);

      margin-bottom: 4px;
    }
  }

  @media ${device.desktop} {
    flex-basis: calc((100% - 64px) / 3);
    &::before {
        width: 340px;
    }
  }
`;

export const StyledNewsHeader = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  margin-bottom: 16px;

  color: var(--black);
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
  color: #111321;
  flex-grow: 1;
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: var(--grey);
`;

export const Link = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: #f59256;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
