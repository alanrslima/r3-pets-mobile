import { SpaceProps } from "@/types";
import { SpacerContainer } from "./spacer.styles";

export type SpacerProps = {
  h?: keyof SpaceProps;
};

export function Spacer({ h = 0 }: SpacerProps) {
  return <SpacerContainer $height={h} />;
}
