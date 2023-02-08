import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const UserInfo = styled.div`
  padding: 20px 16px;

  background-color: var(--white);
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;

  @media ${device.tablet} {
    position: relative;
    left: -32px;
    padding: 24px 40px 24px 32px;
    display: flex;
    justify-content: space-between;
    width: 736px;

    flex-direction: row-reverse;

    border-radius: 0px 40px 40px 0px;
  }
  @media ${device.desktop} {
    position: relative;
    left: -20px;
    width: 411px;
    display: block;
    padding: 20px 16px;
    border-radius: 0px 40px 40px 0px;
  }
`;
export const UserInfoPhotoBox = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;
  align-items: end;
  margin-bottom: 12px;

  @media ${device.tablet} {
    margin-bottom: 0;
  }

  @media ${device.desktop} {
    display: block;

    margin-bottom: 32px;
  }
`;
export const UserPhoto = styled.img`
  margin: 0 auto;
  background-color: gray;
  margin-bottom: 12px;
  width: 233px;
  height: 233px;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  @media ${device.tablet} {
    margin-bottom: 8px;
  }
  @media ${device.desktop} {
    margin: 0 auto;
  }
`;
export const LabelInputPhoto = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
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

export const LogOutBtn = styled.button`
  width: 95px;
  margin-left: auto;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: none;

  color: var(--gray);
  cursor: pointer;

  :hover {
    color: var(--primary);
  }
  @media ${device.tablet} {
    position: absolute;
    bottom: 24px;
    left: 20px;
  }
  @media ${device.desktop} {
    margin-left: 0;
  }
`;
