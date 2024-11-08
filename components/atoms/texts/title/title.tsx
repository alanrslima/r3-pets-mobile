import { ReactNode } from "react";
import { TitleText } from "./title.styles";
import { TitleSizes } from "../texts";

type TitleProps = {
  size?: TitleSizes;
  children?: ReactNode;
};

export function Title({ size = "base", children }: TitleProps) {
  return <TitleText>{children}</TitleText>;
}
