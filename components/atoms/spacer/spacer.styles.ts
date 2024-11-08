import { SpaceProps } from "@/types";
import styled from "styled-components/native";

export const SpacerContainer = styled.View<{ $height: keyof SpaceProps }>`
  height: ${({ theme, $height }) => theme.spaces[$height]};
`;
