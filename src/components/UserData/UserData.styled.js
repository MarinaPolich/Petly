import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const UserInfo = styled.div`
  position: relative;
  left: -32px;
  padding: 40px 40px 24px 32px;
  display: flex;

  width: 736px;
  margin-top: 40px;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-color: var(--white);
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 40px 40px 0px;
  @media ${device.desktop} {
    left: -20px;
    width: 411px;
    display: block;
    padding: 20px 16px;
  }
`;
export const UserInfoPhotoBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media ${device.desktop} {
    display: block;
    margin: 0 auto;
    margin-bottom: 32px;
  }
`;
export const UserPhoto = styled.img`
  margin-bottom: 8px;
  width: 233px;
  height: 233px;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  @media ${device.desktop} {
    margin: 0 auto;
  }
`;
export const LabelInputPhoto = styled.label`
  font-family: var(--font-manrope);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: var(--black);
  cursor: pointer;
  @media ${device.desktop} {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
export const InputPhoto = styled.input`
  display: none;
`;
