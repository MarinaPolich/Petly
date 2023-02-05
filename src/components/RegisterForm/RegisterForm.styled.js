import styled from "styled-components";
import { Field, Form } from "formik";
import { device } from "stylesheet/breakpoints";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  /* padding-top: 42px; */
  background-color: transparent;

  @media ${device.tabDesk} {
    width: 608px;
    height: auto;
    padding: 60px 80px 40px 80px;
    background-color: var(--white);
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: var(--border-btn);
  }

  /* @media ${device.tablet} {
    max-width: 608px;
  } */

  @media ${device.desktop} {
    width: 618px;
    padding: 60px 80px;
  }
`;

export const TitleForm = styled.h2`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: var(--black);

  @media ${device.tabDesk} {
    font-weight: 500;
    font-size: 36px;
    line-height: 1.36;
  }

  & span {
    text-decoration: underline;
  }
`;

export const FormBox = styled(Form)`
  width: 100%;
`;

export const InputForm = styled(Field)`
  width: 100%;
  margin-bottom: 16px;
  padding: 11px 14px 12px 14px;
  color: var(--gray);
  background-color: var(--bg-body);
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: var(--border-btn);
  line-height: 1.357;

  & .active {
  }

  &.error {
    border: 2px solid var(--warning);
  }

  @media ${device.tabDesk} {
    padding: 14px 32px 13px 32px;
    font-size: 18px;
    line-height: 1.39;
  }
`;

export const TextError = styled.p`
  margin-top: -12px;
  margin-left: 32px;
  font-size: 14px;
  line-height: 1.333;
  color: var(--warning);
`;

export const BoxLink = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 40px;
`;

export const TextLink = styled.span`
  font-size: 12px;
  line-height: 1.333;
`;

export const StyledLink = styled(NavLink)`
  color: var(--blue);
  font-size: 12px;
  line-height: 1.333;
  text-transform: capitalize;
`;
