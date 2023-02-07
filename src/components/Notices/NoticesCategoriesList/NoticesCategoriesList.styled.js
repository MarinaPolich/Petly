import styled from "styled-components";
import { device } from "stylesheet/breakpoints";

export const BoxList = styled.ul`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  align-items: center;

  margin-bottom: 20px;

  @media ${device.mobile} {
    justify-content: center;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media ${device.mobile} {
    gap: 20px;
    flex-wrap: wrap;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 248px;
  padding: 8px;
  border: 2px solid transparent;
  border-radius: var(--border-btn);

  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;

  letter-spacing: 0.04em;

  color: var(--white);
  background: var(--primary);

  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid #ff6101;
    background-color: #ff6101;
  }
`;