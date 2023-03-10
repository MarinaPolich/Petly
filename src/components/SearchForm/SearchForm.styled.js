import styled from "styled-components";
import { device } from "stylesheet/breakpoints";


export const SearchInput = styled.input` 
width: 100%;
height: 40px;
border: none;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 20px;
padding: 9px 12px;

@media ${device.tabDesk} {
    
    width: 608px;
    height: 44px;
    
}


`

export const Form = styled.form` 
position: relative;
margin-bottom: 40px;

@media ${device.tabDesk} {
    display: flex;
    justify-content: center;
}
`

export const StyledButton = styled.button` 
width: 25px;
height: 25px;
position: absolute;
top: 9px;
right: 12.5px;
padding: 0;
border: none;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;

@media ${device.tablet} {
    top: 10px;
    right: 57.5px;
}
@media ${device.desktop} {
    top: 11px;
    right: 333px;
}
`