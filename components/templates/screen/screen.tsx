import { ReactNode } from "react";
import { ScreenContainer } from "./screen.styles";

type ScreenProps = {
  children: ReactNode;
};

export function Screen(props: ScreenProps) {
  return <ScreenContainer>{props.children}</ScreenContainer>;
}
