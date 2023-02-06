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

export const PetsBox = styled.div`
  width: 100%;
`;
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


