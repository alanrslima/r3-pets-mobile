import { ColorProps, FontSizeProps, FontWeightProps } from "@/types";
import styled from "styled-components/native";

export const TitleText = styled.Text<{
  $size: keyof FontSizeProps;
  $weight: keyof FontWeightProps;
  $color: keyof ColorProps;
}>`
  color: ${({ theme, $color }) => theme.colors[$color]};
  font-family: PoppinsSemiBold;
  font-size: ${({ theme, $size }) => theme.fontSizes[$size]};
  font-weight: ${({ theme, $weight }) => theme.fontWeights[$weight]};
`;
