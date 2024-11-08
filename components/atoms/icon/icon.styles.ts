import { ColorProps } from "@/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import styled from "styled-components/native";

export const IconWrapper = styled.View``;

export const IconContainer = styled(MaterialIcons).attrs<{
  $color: keyof ColorProps;
}>(({ theme, $color }) => ({
  color: theme.colors[$color],
}))``;

export const IconButtonContainer = styled(MaterialIcons.Button).attrs<{
  $color: keyof ColorProps;
  $bgColor: keyof ColorProps;
}>(({ theme, $color, $bgColor }) => ({
  color: theme.colors[$color],
  backgroundColor: theme.colors[$bgColor],
  iconStyle: { marginRight: 0 },
  activeOpacity: 0.8,
}))``;
