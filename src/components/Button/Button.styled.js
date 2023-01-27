import styled from "styled-components";

export const ButtonBox = styled.button`
  width: 180px;
  height: 44px;
  padding: 6px 26px;

  background-color: transparent;
  border: 2px solid var(--primary);
  border-radius: var(--border-btn);

  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: var(--black);
  transition: background-color var(--transition), color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--primary);
    color: var(--white);
  }
`;

export const ButtonBoxPrimary = styled(ButtonBox)`
  background-color: var(--primary);
  color: var(--white);

  &:hover,
  &:focus {
    background-color: transparent;
    color: var(--black);
  }
`;

export const ButtonBoxMin = styled(ButtonBox)`
  width: auto;
  height: 35px;
  font-size: 14px;
`;

export const ButtonBoxPrimaryMin = styled(ButtonBox)`
  width: auto;
  height: 35px;
  background-color: var(--primary);
  color: var(--white);
  font-size: 14px;
`;

export const ButtonBoxPrimaryWithIcon = styled(ButtonBoxPrimary)`
  width: auto;

  & .iconBtn {
    margin-right: 12px;
    color: currentColor;
  }
`;

export const ButtonBoxPrimaryMinWithIcon = styled(ButtonBoxPrimaryMin)`
  padding: 6px 35px;

  & .iconBtn {
    margin-right: 12px;
    color: currentColor;
  }
`;
