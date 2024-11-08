import { ReactNode } from "react";
import { ParagraphText } from "./paragraph.styles";
import { ColorProps, FontSizeProps } from "@/types";

type ParagraphProps = {
  size?: keyof FontSizeProps;
  children?: ReactNode;
  numberOfLines?: number;
  color?: keyof ColorProps;
};

export function Paragraph({
  size = "sm",
  color = "onSurfaceSecondary",
  ...rest
}: ParagraphProps) {
  return <ParagraphText $size={size} $color={color} {...rest} />;
}
