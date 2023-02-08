import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const PetsList = styled.ul`
  @media ${device.desktop} {
    height: 100vh;
    overflow-x: scroll;
  }
`;

export const PetsCard = styled.li`
  position: relative;
  margin-top: 18px;
  margin-bottom: 22px;
  padding: 20px;
  background: var(--white);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  line-height: 27px;
  @media ${device.tablet} {
    display: flex;
    margin-top: 0;
  }
  @media ${device.desktop} {
    display: flex;
  }
`;
export const PetPhoto = styled.img`
  display: block;
  margin: 0 auto;
  width: 240px;
  height: 240px;
  margin-bottom: 20px;

  border-radius: 40px;

  @media ${device.tablet} {
    margin: 0;
    width: 161px;
    height: 161px;
    margin-right: 32px;
    margin-bottom: 0;
  }
  @media ${device.desktop} {
    margin: 0;
    width: 161px;
    height: 161px;
    margin-right: 32px;
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 280px;
  right: 20px;

  border: 0;
  background-color: transparent;
  cursor: pointer;

  @media ${device.tablet} {
    top: 20px;
    right: 20px;

    width: 44px;
    height: 44px;
    border-radius: 50%;

    background-color: var(--bg-body);
    backdrop-filter: blur(2px);
  }
  @media ${device.desktop} {
    top: 20px;
    right: 20px;

    width: 44px;
    height: 44px;
    border-radius: 50%;

    background-color: var(--bg-body);
    backdrop-filter: blur(2px);
  }
`;
export const PetsInfoItem = styled.li`
  margin-bottom: 12px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.38;

  letter-spacing: 0.04em;

  color: var(--black);

  @media ${device.tablet} {
    &:last-child {
      margin-bottom: 0px;
      margin-top: 16px;
      font-size: 16px;
    }
  }
`;
export const PetsInfoSpan = styled.span`
  font-weight: 500;
`;
export const OrEmptyTextHolder = styled.h2`
  text-align: center;
`;
