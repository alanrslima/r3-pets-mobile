import { Icon, Paragraph, Title } from "@/components/atoms";
import { ColorProps } from "@/types";
import styled from "styled-components/native";

export const ListItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  gap: ${({ theme }) => theme.spaces[4]};
`;

export const ListItemWrapperIcon = styled.View<{ $bgColor: keyof ColorProps }>`
  height: ${({ theme }) => theme.sizes[9]};
  width: ${({ theme }) => theme.sizes[9]};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $bgColor }) => theme.colors[$bgColor]};
  border-radius: ${({ theme }) => theme.radii.md};
`;

export const ListItemIcon = styled(Icon).attrs({ size: 24 })``;

export const ListItemWrapperRight = styled.View`
  justify-content: center;
`;

export const ListItemChevron = styled(Icon).attrs({
  size: 24,
  color: "onSurfaceSecondary",
})``;

export const ListItemContent = styled.View`
  flex: 1;
`;

export const ListItemTitle = styled(Title)``;

export const ListItemParagraph = styled(Paragraph)``;
