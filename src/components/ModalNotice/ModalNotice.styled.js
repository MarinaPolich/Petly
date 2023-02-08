import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const Wrapper = styled.div`
  padding-top: 29px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;

  @media ${device.tablet} {
    padding-top: 0;
  }
  @media ${device.desktop} {
    padding-top: 0;
  }
`;

export const BoxImage = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 20px 20px;

  @media ${device.tablet} {
    width: 288px;
    height: 328px;
    object-fit: cover;
  }
  @media ${device.desktop} {
    width: 288px;
    height: 328px;
    object-fit: cover;
  }
`;

export const Category = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  display: flex;
  align-items: center;
  width: 158px;
  padding: 6px;
  padding-left: 20px;
  border-radius: 0px 40px 40px 0px;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;

  letter-spacing: 0.04em;

  color: var(--black);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;

export const Title = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  letter-spacing: -0.01em;
  color: var(--black);
  margin-bottom: 16px;

  @media ${device.tablet} {
    font-size: 28px;
  }
  @media ${device.desktop} {
    font-size: 28px;
  }
`;

export const List = styled.ul`
  margin-bottom: 28px;
  &:not(:last-child) {
    margin-right: 0px;
  }
`;

export const ListItem = styled.li`
  font-family: "Manrope";
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  color: var(--black);
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Comments = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  color: var(--black);
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.desktop} {
    font-size: 16px;
  }
`;

export const SpanComments = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  color: var(--black);

  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.desktop} {
    font-size: 16px;
  }
`;

export const Span = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  display: inline-block;
  width: 70px;
  font-size: 14px;
  line-height: 1.3;
  margin-right: 57px;
  color: var(--black);

  @media ${device.tablet} {
    margin-right: 20px;
    font-size: 16px;
  }
  @media ${device.desktop} {
    margin-right: 20px;
    font-size: 16px;
  }
`;

export const SpanData = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  display: inline-block;
  width: 91px;
  overflow: hidden;
`;

export const FavoriteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  text-align: center;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: #111111;
  background-color: white;
  transition: 0.5s;

  @media ${device.tablet} {
    font-size: 16px;
    width: 140px;
  }
  @media ${device.desktop} {
    font-size: 16px;
    width: 140px;
  }
`;

export const BoxList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoxTabl = styled.div`
  @media ${device.tablet} {
    display: flex;
  }
  @media ${device.desktop} {
    display: flex;
  }
`;
export const ContactLink = styled.a`
  color: white;
  text-decoration: none;
`;

export const BoxTitle = styled.div`
  @media ${device.tablet} {
    margin-left: 20px;
  }
  @media ${device.desktop} {
    margin-left: 20px;
  }
`;

export const FavoriteLabel = styled.label`
  cursor: pointer;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 40px;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: right;
  }
  @media ${device.desktop} {
    flex-direction: row;
    align-items: right;
  }
`;

export const NextBtn = styled.button`
  width: 100%;
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

  @media ${device.tablet} {
    width: 180px;
    height: 44px;
    margin-left: 12px;
  }
  @media ${device.desktop} {
    width: 180px;
    height: 44px;
  }
`;
