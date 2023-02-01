import styled from "styled-components";

export const StyledLi = styled.li` 
&::before{
    display: inline-block;
    content: "";
    width: 200px;
height: 4px;


background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
border-radius: 40px;
margin-bottom: 4px;
}
`

export const StyledNewsHeader = styled.h3` 
font-weight: 700;
font-size: 24px;
line-height: 33px;
letter-spacing: -0.01em;
margin-bottom: 16px;



color: var(--black);
`

export const Description = styled.p` 
font-weight: 400;
font-size: 16px;
line-height: 22px;
margin-bottom: 20px;
color: #111321;
`

export const Date = styled.p` 
font-weight: 400;
font-size: 16px;
line-height: 22px;

color: var(--grey);
`

export const Link = styled.a` 
font-weight: 500;
font-size: 16px;
line-height: 22px;

color: #F59256;
`

export const FlexBox = styled.div` 
display: flex;
justify-content: space-between;
`