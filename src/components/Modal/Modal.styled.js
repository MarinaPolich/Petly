import styled from 'styled-components';
import { ReactComponent as Close } from '../../assets/icon/Close copy.svg';
export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.actv ? 1 : 0
  
  };
  pointer-events: ${props => (props.actv ? 'all' : 'none')};
  transition: 0.5s;
`;

export const ModalContent = styled.div`
  /* padding: 24px; */
  background-color: white;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  width: 608px;
  /* min-height: 570px; */
  text-align: center;
  transform: ${props => (props.actv ? 'scale(1)' : 'scale(0.5)')};
  transition: 0.5s all;
`;


export const ModalTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 1.3;
  color: #111111;
  margin-top: 31px;
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
