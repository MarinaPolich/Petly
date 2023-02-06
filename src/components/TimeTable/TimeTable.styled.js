import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 122px;
  padding: 12px;
  background: var(--white);
  border: 1px solid var(--primary);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  position: absolute;
`;

export const StyledItem = styled.p`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: var(--black);
  letter-spacing: -0.03em;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;
