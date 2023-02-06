import styled from "styled-components";
import SVG from "react-inlinesvg";
import { device } from "stylesheet/breakpoints";

export const Notice = styled.li`
  width: 280px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;

  background: var(--white);

  @media ${device.tablet} {
    width: calc((100% - 32px) / 2);
  }

  @media ${device.desktop} {
    width: calc((100% - 96px) / 4);
  }
`;
export const BoxImage = styled.div`
  position: relative;
  display: flex;
  width: 280px;
  height: 288px;

  @media ${device.tablet} {
    width: 336px;
  }

  @media ${device.desktop} {
    width: 288px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

export const FavoriteLabel = styled.label`
  position: absolute;
  top: 12px;
  right: 12px;

  cursor: pointer;
`;

export const FavoriteCheck = styled.input`
  display: none;
`;

export const FavoriteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 0;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;

export const DescriptionBox = styled.div`
  padding: 20px 16px;
  padding-bottom: 12px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;

  color: var(--black);

  @media ${device.desktop} {
  }
`;

export const List = styled.ul`
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;

  color: var(--black);

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const SpanBreed = styled.span`
  margin-left: 40px;
`;

export const SpanPlace = styled.span`
  margin-left: 43px;
`;

export const SpanAge = styled.span`
  margin-left: 55px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  height: 96px;
`;

export const ButtonMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 248px;
  padding: 8px;
  border: 2px solid var(--primary);
  border-radius: var(--border-btn);

  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;

  letter-spacing: 0.04em;

  color: var(--primary);
  background: var(--white);

  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid #ff6101;
    color: #ff6101;
  }
`;

export const SvgDelete = styled(SVG)`
  margin-left: 13px;
  text-align: center;

  fill: var(--primary);
`;

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 248px;
  padding: 8px;
  border: 2px solid var(--primary);
  border-radius: var(--border-btn);

  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;

  letter-spacing: 0.04em;

  color: var(--primary);
  background: var(--white);

  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid #ff6101;
    color: #ff6101;

    & ${SvgDelete} {
      fill: #ff6101;
    }
  }
`;
