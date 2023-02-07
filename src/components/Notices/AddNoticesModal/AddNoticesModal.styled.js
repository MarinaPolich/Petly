import styled from "styled-components";
import { Form } from "formik";
import { device } from "stylesheet/breakpoints";

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  @media ${device.tablet} {
    display: inline-flex;
    padding-left: 80px;
    padding-right: 80px;
  }
  @media ${device.desktop} {
    display: inline-flex;
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const InputText = styled.label`
  text-align: left;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.08;
  color: #111111;
  margin-bottom: 12px;
  &:first-of-type {
    margin-top: 40px;
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    font-size: 24px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
`;

export const ModalText = styled.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.35;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
  margin-top: 20px;
  margin-bottom: 28px;

  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 20px;
  }
`;
export const Span = styled.span`
  color: #f59256;
`;

export const FormInput = styled.input`
  width: 100%;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  text-decoration: none;
  outline: none;
  padding-top: 11px;
  padding-left: 16px;
  padding-bottom: 11px;
  margin-bottom: 28px;
  ::placeholder {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    color: rgba(17, 17, 17, 0.6);
  }
  &:focus {
    border: 3px solid rgb(245, 146, 86);
  }

  &.error {
    border: 2px solid var(--warning);
  }


  @media ${device.tablet} {
    width: 448px;
  }
  @media ${device.desktop} {
    width: 448px;
  }

  &.error {
    border: 2px solid var(--warning);
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 40px;

  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const CancelBtn = styled.button`
  width: 100%;
  height: 44px;
  margin-bottom: 12px;
  text-align: center;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: #111111;
  background-color: white;
  transition: 0.5s;

  @media ${device.tablet} {
    width: 180px;
    height: 44px;
  }
  @media ${device.desktop} {
    width: 180px;
    height: 44px;
  }

  &:hover {
    color: white;
    background: #f59256;
  }

  @media ${device.tablet} {
    margin-right: 24px;
    margin-bottom: 0px;
  }
  @media ${device.desktop} {
    margin-right: 24px;
    margin-bottom: 0px;
  }
`;

export const NextBtn = styled.button`
  width: 100%;
  height: 44px;
  text-align: center;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: white;
  background: #f59256;

  transition: 0.5s;

  &:hover {
    color: #111111;
    background: white;
  }

  @media ${device.tablet} {
    width: 180px;
    height: 44px;
  }
  @media ${device.desktop} {
    width: 180px;
    height: 44px;
  }
`;


export const FormInputImg = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const FormInputText = styled.textarea`
  width: 100%;
  height: 116px;
  min-height: 100px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  text-decoration: none;
  outline: none;
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 73px;
  margin-bottom: 28px;
  overflow: hidden;
  resize: none;
  ::placeholder {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    color: rgba(17, 17, 17, 0.6);
  }
  &:focus {
    border: 3px solid rgb(245, 146, 86);
  }
  @media ${device.tablet} {
    width: 448px;
    height: 116px;
  }
  @media ${device.desktop} {
    width: 448px;
    height: 116px;

  &.error {
    border: 2px solid var(--warning);

  }}
`;

export const AddPhoto = styled.label`
  position: relative;
  width: 140px;
  height: 140px;
  background: #fdf7f2;
  border-radius: 20px;
  text-align: left;
  text-decoration: none;
  outline: none;
  margin-bottom: 28px;
  overflow: hidden;
  &:focus {
    border: 3px solid rgb(245, 146, 86);
  }
`;

export const AddIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Box = styled.div`
  text-align: left;
`;

export const RadioLabel = styled.label`
  color: #000000;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  margin-right: 40px;
  margin-bottom: 40px;
  cursor: pointer;
  display: inline-block;
  @media ${device.tablet} {
    font-size: 20px;
    margin-right: 95px;
  }
  @media ${device.desktop} {
    font-size: 20px;
    margin-right: 95px;
  }
`;

export const RadioInput = styled.input`
  display: none;
  &:checked + ${RadioLabel} {
    color: #f59256;
  }
`;

export const ImgSex = styled.img`
  display: block;
  margin-top: 31px;
  margin-bottom: 20px;
  width: 54px;
  height: 54px;
`;

export const CategoryLabel = styled.label`
  margin-right: 12px;
  height: 35px;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: #000000;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35px;
  background: #ffffff;
  padding-top: 15px;
  padding-left: 28px;
  padding-bottom: 5px;
  padding-right: 28px;
  display: inline-flex;
  flex-direction: row;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
    margin-top: 16px;
    margin-bottom: 28px;
  }

  @media ${device.tablet} {
    height: 47px;
    font-size: 20px;
    padding-top: 20px;
    padding-left: 28px;
    padding-bottom: 10px;
    padding-right: 28px;
  }
  @media ${device.desktop} {
    height: 47px;
    font-size: 20px;
    padding-top: 20px;
    padding-left: 28px;
    padding-bottom: 10px;
    padding-right: 28px;
  }
`;

export const CategoryInut = styled.input`
  display: none;

  &:checked + ${CategoryLabel} {
    color: #ffffff;
    background: #f59256;
  }

  &.error {
    border: 2px solid var(--warning);
  }
`;

export const Box2 = styled.div`
  text-align: left;
  /* display: flex;
  flex-direction: row; */
`;

export const Error = styled.p`
 margin-top: -15px;
  margin-left: 32px;
  font-size: 14px;
  line-height: 1.333;
  color: var(--warning);
`;

