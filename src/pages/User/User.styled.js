import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const UserPageBox = styled.div`
  position: relative;
  padding-top: 61px;

  @media ${device.tablet} {
    padding-top: 88px;
  }

  @media ${device.desktop} {
    display: flex;
    padding-top: 58px;
  }
`;

export const UserInfoBox = styled.div`
  margin-bottom: 20px;
  @media ${device.desktop} {
    margin-right: 12px;
    margin-bottom: 0;
  }
`;

export const UserHeader = styled.h2`
  margin-bottom: 18px;
  font-family: var(--font-manrope);
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  color: var(--black);
  @media ${device.tablet} {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

export const UserPetsBox = styled.div``;
export const AddBtnLabel = styled.label`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  line-height: 1.35;
  color: var(--black);
`;
export const HeadingBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
export const AddBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;

  border-radius: 50%;
  background-color: var(--primary);
  margin-left: 12px;
  cursor: pointer;
`;

export const FormWrapper = styled.form`
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
  &:last-child {
    margin-bottom: 40px;
  }
`;
