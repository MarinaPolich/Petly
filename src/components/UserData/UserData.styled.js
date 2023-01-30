import styled from "styled-components";

export const UserInfo = styled.div`
  position: relative;
  left: -20px;
  width: 411px;
  padding: 20px 16px;
  background-color: var(--white);
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 40px 40px 0px;
`;
export const UserInfoPhotoBox = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 32px;
`;
export const UserPhoto = styled.img`
  margin: 0 auto;
  background-color: gray;
  width: 233px;
  height: 233px;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
`;
export const LabelInputPhoto = styled.label`
  position: absolute;
  right: 0;
  bottom: 0;
  font-family: var(--font-manrope);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: var(--black);
  cursor: pointer;
`;
export const InputPhoto = styled.input`
  display: none;
`;
