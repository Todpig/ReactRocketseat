import { ButtonContainer, Buttonvariant } from "./Button.styles";

interface ButtonProps {
  variant?: Buttonvariant;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainer variant={variant}>Vá lá</ButtonContainer>;
}
