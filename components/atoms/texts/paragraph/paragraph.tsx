import { ReactNode } from "react";
import { TitleSizes } from "../texts";
import { ParagraphText } from "./paragraph.styles";

type ParagraphProps = {
  size?: TitleSizes;
  children?: ReactNode;
  numberOfLines?: number;
};

export function Paragraph({ size, ...rest }: ParagraphProps) {
  return <ParagraphText {...rest} />;
}
