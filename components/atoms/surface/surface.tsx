import { ReactNode } from "react";
import { SurfaceContainer } from "./surface.styles";
import { SpaceProps } from "@/types";

type SurfaceProps = {
  children?: ReactNode;
  marginHorizontal?: keyof SpaceProps;
  marginVertical?: keyof SpaceProps;
  padding?: keyof SpaceProps;
  gap?: keyof SpaceProps;
};

export function Surface({
  marginHorizontal = 0,
  marginVertical = 0,
  padding = 0,
  gap = 0,
  children,
}: SurfaceProps) {
  return (
    <SurfaceContainer
      $marginHorizontal={marginHorizontal}
      $marginVertical={marginVertical}
      $padding={padding}
      $gap={gap}
    >
      {children}
    </SurfaceContainer>
  );
}
