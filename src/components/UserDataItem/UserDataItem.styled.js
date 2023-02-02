import styled from "styled-components";
import { device } from "stylesheet/breakpoints";
import { Form } from "formik";

export const UserInfoStats = styled.li`
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  margin-bottom: 8px;
`;
export const FormBox = styled(Form)`
  display: flex;
  justify-content: flex-start;
`;

export const InfoLabel = styled.p`
  display: block;
  width: 56px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: var(--black);
  @media ${device.tablet} {
    width: 80px;
    font-size: 18px;
    line-height: 1.38;
  }
  @media ${device.desktop} {
    width: 80px;
    font-size: 18px;
    line-height: 1.38;
  }
`;
export const InfoInput = styled.input`
  width: 159px;
  height: 24px;
  margin-right: 9px;
  padding: 0 15px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  background-color: var(--bg-body);
  letter-spacing: 0.04em;
  color: var(--black);
  border: none;
  outline: 1px solid rgba(245, 146, 86, 0.5);

  border-radius: 40px;
  @media ${device.tablet} {
    margin: 0 25px;
    width: 216px;
    height: 32px;
    padding: 0 18px;
    font-size: 18px;
    line-height: 1.38;
  }
  @media ${device.desktop} {
    margin: 0 25px;
    width: 216px;
    height: 32px;
    padding: 0 18px;
    font-size: 18px;
    line-height: 1.38;
  }
`;

export const InfoHolder = styled.p`
  display: flex;
  align-items: center;
  margin-right: 9px;
  width: 159px;
  height: 24px;
  padding-left: 18px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: var(--black);
  overflow: hidden;

  letter-spacing: 0.04em;
  @media ${device.tablet} {
    margin: 0 25px;
    width: 216px;
    height: 32px;
    padding-left: 12px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.38;
  }
  @media ${device.desktop} {
    margin: 0 25px;
    width: 216px;
    height: 32px;
    padding-left: 12px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.38;
  }
`;

export const EditBtn = styled.button`
  width: 20px;
  height: 20px;

  border: none;
  border-radius: 50%;

  background-color: var(--bg-body);
  cursor: pointer;
  @media ${device.tablet} {
    width: 32px;
    height: 32px;
  }
  @media ${device.desktop} {
    width: 32px;
    height: 32px;
  }
`;
