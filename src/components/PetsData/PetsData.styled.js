import styled from "styled-components";

export const PetsList = styled.ul`
  /* height: 100vh;
  overflow-x: scroll; */
`;

export const PetsCard = styled.li`
  position: relative;
  display: flex;
  margin-bottom: 22px;
  padding: 20px;
  background: var(--white);
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
`;
export const PetPhoto = styled.img`
  display: block;
  width: 161px;
  height: 161px;
  margin-right: 32px;
  border-radius: 40px;

  background-color: gray;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 44px;
  height: 44px;

  background-color: var(--bg-body);
  backdrop-filter: blur(2px);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
`;
export const PetsInfoItem = styled.li`
  margin-bottom: 12px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.38;

  letter-spacing: 0.04em;
  &:last-child {
    margin-bottom: 0px;
    margin-top: 16px;
  }
`;
export const PetsInfoSpan = styled.span`
  font-weight: 500;
`;
