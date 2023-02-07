import styled from "styled-components";
import { ReactComponent as Close } from "../../assets/icon/Close copy.svg";
import { device } from "stylesheet/breakpoints";
export const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.actv ? 1 : 0)};
  pointer-events: ${(props) => (props.actv ? "all" : "none")};
  transition: 0.5s;
  @media ${device.mobile} {
    padding: 20px;
  }
`;

export const ModalContent = styled.div`
  min-width: 280px;
  width: 450px;
  background-color: white;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  overflow-y: auto;
  max-height: calc(100vh - 1rem);
  overflow-x: hidden;
  text-align: center;
  transform: ${(props) => (props.actv ? "scale(1)" : "scale(0.5)")};
  transition: 0.5s all;
  @media ${device.tablet} {
    width: 608px;
  }
  @media ${device.desktop} {
    width: 608px;
  }
`;

export const ModalTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  color: #111111;
  margin-top: 40px;

  @media ${device.tablet} {
    font-size: 36px;
  }

  @media ${device.desktop} {
    font-size: 36px;
  }
`;

export const CloseIcon = styled(Close)`
  position: absolute;
  top: 15px;
  right: 29px;
  fill: #fdf7f2;
  &:hover {
    fill: #f59256;
    transition: 0.5s;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
