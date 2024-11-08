import { ReactNode } from "react";
import { SurfaceContainer } from "./surface.styles";

type SurfaceProps = {
  children?: ReactNode;
};

export function Surface(props: SurfaceProps) {
  return <SurfaceContainer>{props.children}</SurfaceContainer>;
}
