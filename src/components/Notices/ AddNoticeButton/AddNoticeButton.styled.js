import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  right: 20px;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 18px;
  border: 0;
  border-radius: 50%;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;

  color: var(--white);
  background: var(--primary);
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  z-index: 1;
  cursor: pointer;

  &:focus,
  &:hover {
    background: #FF6101;
  }
`;


export const FormWrapper = styled.form`
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
  padding-bottom: 12px;
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
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1, 2;
  color: #111111;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
`;

export const FormInputImg = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const FormInputText = styled.textarea`
  width: 394px;
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

export const Box = styled.div`
  display: inline-block;
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
  margin-top: 28px;
  margin-bottom: 20px;
  width: 54px;
  height: 54px;
`;
