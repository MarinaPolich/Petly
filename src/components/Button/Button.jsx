import {
  ButtonBox,
  ButtonBoxMin,
  ButtonBoxPrimary,
  ButtonBoxPrimaryMin,
  ButtonBoxPrimaryMinWithIcon,
  ButtonBoxPrimaryWithIcon,
} from "./Button.styled";
import SVG from "react-inlinesvg";

export const ButtonWithBorder = ({ title }) => {
  return <ButtonBox>{title}</ButtonBox>;
};

export const ButtonPrimary = ({ title }) => {
  return <ButtonBoxPrimary>{title}</ButtonBoxPrimary>;
};

export const ButtonWithBorderMin = ({ title }) => {
  return <ButtonBoxMin>{title}</ButtonBoxMin>;
};

export const ButtonPrimaryMin = ({ title }) => {
  return <ButtonBoxPrimaryMin>{title}</ButtonBoxPrimaryMin>;
};

export const ButtonPrimaryWithIcon = ({ title, icon }) => {
  return (
    <ButtonBoxPrimaryWithIcon>
      <SVG src={icon} />
      {title}
    </ButtonBoxPrimaryWithIcon>
  );
};

export const ButtonPrimaryMinWithIcon = ({ title, icon }) => {
  return (
    <ButtonBoxPrimaryMinWithIcon>
      <SVG src={icon} />
      {title}
    </ButtonBoxPrimaryMinWithIcon>
  );
};
