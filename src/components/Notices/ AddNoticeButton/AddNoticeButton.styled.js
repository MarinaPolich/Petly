import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  right: 20px;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 18px;
  border: 0;
  border-radius: 50%;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;

  color: var(--white);
  background: var(--primary);
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  z-index: 1;
  cursor: pointer;

  &:focus,
  &:hover {
    background: #FF6101;
  }
`;
