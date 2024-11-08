import { ReactNode } from "react";
import { TitleText } from "./title.styles";
import { ColorProps, FontSizeProps, FontWeightProps } from "@/types";

type TitleProps = {
  size?: keyof FontSizeProps;
  weight?: keyof FontWeightProps;
  color?: keyof ColorProps;
  children?: ReactNode;
};

export function Title({
  size = "base",
  weight = "medium",
  color = "onSurfacePrimary",
  children,
}: TitleProps) {
  return (
    <TitleText $color={color} $size={size} $weight={weight}>
      {children}
    </TitleText>
  );
}
