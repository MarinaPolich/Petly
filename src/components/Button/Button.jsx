import {
  ButtonBox,
  ButtonBoxMax,
  ButtonBoxMin,
  ButtonBoxPrimary,
  ButtonBoxPrimaryMax,
  ButtonBoxPrimaryMin,
  ButtonBoxPrimaryMinWithIcon,
  ButtonBoxPrimaryWithIcon,
} from "./Button.styled";
import SVG from "react-inlinesvg";

export const ButtonWithBorder = ({ title, ...props }) => {
  return <ButtonBox {...props}>{title}</ButtonBox>;
};

export const ButtonPrimary = ({ title, ...props }) => {
  return <ButtonBoxPrimary {...props}>{title}</ButtonBoxPrimary>;
};

export const ButtonWithBorderMin = ({ title, ...props }) => {
  return <ButtonBoxMin {...props}>{title}</ButtonBoxMin>;
};

export const ButtonPrimaryMin = ({ title, ...props }) => {
  return <ButtonBoxPrimaryMin {...props}>{title}</ButtonBoxPrimaryMin>;
};

export const ButtonWithBorderMax = ({ title, ...props }) => {
  return <ButtonBoxMax {...props}>{title}</ButtonBoxMax>;
};

export const ButtonPrimaryMax = ({ title, ...props }) => {
  return <ButtonBoxPrimaryMax {...props}>{title}</ButtonBoxPrimaryMax>;
};

export const ButtonPrimaryWithIcon = ({ title, icon, ...props }) => {
  return (
    <ButtonBoxPrimaryWithIcon {...props}>
      <SVG src={icon} />
      {title}
    </ButtonBoxPrimaryWithIcon>
  );
};

export const ButtonPrimaryMinWithIcon = ({ title, icon, ...props }) => {
  return (
    <ButtonBoxPrimaryMinWithIcon {...props}>
      <SVG src={icon} />
      {title}
    </ButtonBoxPrimaryMinWithIcon>
  );
};
