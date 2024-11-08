import { ColorProps, FontSizeProps } from "@/types";
import styled from "styled-components/native";

export const ParagraphText = styled.Text<{
  $color: keyof ColorProps;
  $size: keyof FontSizeProps;
}>`
  font-family: PoppinsMedium;
  color: ${({ theme, $color }) => theme.colors[$color]};
  font-size: ${({ theme, $size }) => theme.fontSizes[$size]};
`;
