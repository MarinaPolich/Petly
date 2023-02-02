import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const FriendsContainer = styled.section`
  padding-top: 42px;
  padding-bottom: 100px;

  @media ${device.tablet} {
    padding-top: 88px;
  }

  @media ${device.desktop} {
    padding-top: 69px;
  }
`;


export const StyledLi = styled.li` 
background: var(--white);
border-radius: 20px;
padding: 12px;

`
export const MainWrapper = styled.div` 
display: flex;
`
export const ImageBox = styled.div` 
width: 45%;
max-width: 45%;
`
export const InfoWrapper = styled.div` 
width: 55%;
max-width: 55%;

`

export const StyledImg = styled.img` 
width: 100px;
height: auto;
margin: 0;

`

export const StyledHeader = styled.h3` 
font-weight: 700;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
text-decoration-line: underline;
margin-bottom: 12px;

color: var(--primary);
display: flex;
justify-content: center;


`

export const StyledTime = styled.p` 




`


export const StyledAddress = styled.p` 



`

export const StyledPhone = styled.p` 


`


export const StyledEmail = styled.p` 


`
