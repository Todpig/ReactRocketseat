import styled, { css } from "styled-components";

export type Buttonvariant = "primary" | "secundary";

interface ButtonContainerProps {
  variant: Buttonvariant;
}

const buttonVariants = {
  primary: "purple",
  secundary: "orange",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;
  ${(props) => {
    return css`background-color: ${buttonVariants[props.variant]}}`;
  }}
`;
