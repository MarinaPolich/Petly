import styled from "styled-components";
import { device } from "stylesheet/breakpoints";
import { Form } from "formik";


export const FormWrapper = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
`;

export const InputText = styled.label`
  text-align: left;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.08;
  color: #111111;
  padding-bottom: 12px;
`;

export const FormInput = styled.input`
  width: 448px;
  height: 48px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  text-decoration: none;
  outline: none;
  padding-top: 11px;
  padding-left: 16px;
  padding-bottom: 11px;
  margin-bottom: 28px;
  &:last-of-type {
    margin-bottom: 40px;
  }
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
`;

export const FormInputDate = styled.input`
  width: 448px;
  height: 48px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  text-decoration: none;
  outline: none;
  padding-top: 11px;
  padding-left: 16px;
  padding-bottom: 11px;
  margin-bottom: 28px;

  &:last-of-type {
    margin-bottom: 40px;
  }
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
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 49px;
`;

export const CancelBtn = styled.button`
  width: 180px;
  height: 44px;
  margin-right: 24px;
  text-align: center;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: #111111;
  background-color: white;
  transition: 0.5s;

  &:hover {
    color: white;
    background: #f59256;
  }
`;

export const NextBtn = styled.button`
  width: 180px;
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
`;

export const InputTextModa2 = styled.label`
  text-align: left;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1, 08;
  color: #111111;
  padding-bottom: 12px;
`;

export const InputTextImgModa2 = styled.label`
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1, 2;
  color: #111111;
  letter-spacing: -0.01em;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const FormInputImg = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const FormInputText = styled.textarea`
  width: 394px;
  height: 116px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  text-decoration: none;
  outline: none;
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 73px;
  margin-bottom: 40px;
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
`;

export const AddPhoto = styled.label`
  position: relative;
  width: 182px;
  height: 182px;
  background: #fdf7f2;
  border-radius: 40px;
  margin: 0 auto;
  text-decoration: none;
  outline: none;
  margin-bottom: 40px;
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