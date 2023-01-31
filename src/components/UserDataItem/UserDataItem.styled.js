import styled from "styled-components";

export const UserInfoStats = styled.li`
  display: flex;

  align-items: center;
  width: 100%;
  height: 32px;
  margin-bottom: 8px;
`;
export const InfoLabel = styled.p`
  display: block;
  width: 80px;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
`;
export const InfoInput = styled.input`
  margin: 0 25px;
  width: 216px;
  height: 32px;

  padding: 0 12px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.38;

  letter-spacing: 0.04em;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
`;

export const InfoHolder = styled.p`
  display: flex;
  align-items: center;

  margin: 0 25px;
  width: 216px;
  height: 32px;
  padding-left: 12px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.38;

  letter-spacing: 0.04em;
`;

export const EditBtn = styled.button`
  width: 32px;
  height: 32px;

  border: none;
  border-radius: 50%;

  background-color: var(--bg-body);
  cursor: pointer;
`;
