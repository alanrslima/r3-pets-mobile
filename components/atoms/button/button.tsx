import { TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.styles";

export type ButtonSizes = "xs" | "sm" | "base" | "lg" | "xl";

export type ButtonVariants = "solid" | "outline" | "ghost";

export type ButtonProps = TouchableOpacityProps & {
  size?: ButtonSizes;
  variant?: ButtonVariants;
};

export function Button({
  size = "base",
  variant = "solid",
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      $size={size}
      $variant={variant}
      {...rest}
    ></ButtonContainer>
  );
}
