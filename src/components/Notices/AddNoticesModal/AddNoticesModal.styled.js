import styled from "styled-components";
import { Form } from "formik";

export const FormWrapper = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  padding-left: 80px;
  padding-right: 80px;
`;

export const InputText = styled.label`
  text-align: left;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.08;
  color: #111111;
 margin-bottom: 12px;
  &:first-of-type {
    margin-top: 40px;
    margin-bottom: 0;
  }
`;

export const ModalText = styled.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
  margin-top: 20px;
  margin-bottom: 28px;
`;
export const Span = styled.span`
  color: #f59256;
`;

export const FormInput = styled.input`
  width: 448px;
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
  margin-bottom: 40px;
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
  margin-bottom: 12px;
`;

export const InputTextImgModa2 = styled.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.08;
  color: #000000;
  margin-bottom: 12px;
  text-align: left;
`;

export const FormInputImg = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const FormInputText = styled.textarea`
  width: 448px;
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
  width: 140px;
  height: 140px;
  background: #fdf7f2;
  border-radius: 20px;
  text-align: left;
  text-decoration: none;
  outline: none;
  margin-bottom: 28px;
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
  font-size: 20px;
  line-height: 1.3;
  margin-right: 95px;
  margin-bottom: 40px;
  cursor: pointer;
  display: inline-block;
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
  height: 47px;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: #000000;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35px;
  background: #ffffff;
  padding-top: 20px;
  padding-left: 28px;
  padding-bottom: 10px;
  padding-right: 28px;
  display: inline-flex;
  flex-direction: row;
  cursor: pointer;
  
  &:last-of-type {
    margin-right: 0;
    margin-top: 16px;
    margin-bottom: 28px;
  }
`;

export const CategoryInut = styled.input`
  display: none;

  &:checked + ${CategoryLabel} {
    color: #ffffff;
    background: #f59256;
  }
`;

export const Box2 = styled.div`
  text-align: left;
  /* display: flex;
  flex-direction: row; */
`;