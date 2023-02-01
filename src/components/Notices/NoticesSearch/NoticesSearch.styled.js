import styled from "styled-components";
import SVG from "react-inlinesvg";
import { device } from "stylesheet/breakpoints";

export const Box = styled.div`
  margin-bottom: 28px;

  @media ${device.tabDesk} {
    width: 608px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 28px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  text-align: center;

  color: var(--black);

  @media ${device.tabDesk} {
    margin-bottom: 40px;

    font-size: 48px;
  }
`;

export const Form = styled.form`
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  padding: 10px 12px;
  background-color: transparent;
  border: 0;
  border-radius: var(--border-input);

  cursor: pointer;
`;

// export const ButtonClear = styled.button`
//   position: absolute;
//   top: 0;
//   right: 0;

//   display: none;
//   padding: 10px 12px;
//   background-color: transparent;
//   border: 0;
//   border-radius: var(--border-input);

//   cursor: pointer;
// `;

export const Input = styled.input`
  width: 100%;
  padding: 9px 12px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  background: var(--white);
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border: 1px solid transparent;
  border-radius: var(--border-input);
  outline: none;

  &:focus {
    border: 1px solid rgba(245, 146, 86, 0.5);
  }

  @media ${device.tabDesk} {
    padding: 8px 20px;

    font-size: 20px;
    line-height: 1.35;

    border-radius: var(--border-btn);
  }
`;

export const Svg = styled(SVG)`
  text-align: center;
`;
