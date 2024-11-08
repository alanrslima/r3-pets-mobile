import { IconNames } from "@/components/atoms";
import {
  ListItemChevron,
  ListItemContainer,
  ListItemContent,
  ListItemIcon,
  ListItemParagraph,
  ListItemTitle,
  ListItemWrapperIcon,
  ListItemWrapperRight,
} from "./list-item.styles";
import { TouchableOpacityProps } from "react-native";
import { ColorProps } from "@/types";

export type ListItemProps = TouchableOpacityProps & {
  iconColor?: keyof ColorProps;
  bgIconColor?: keyof ColorProps;
  icon?: IconNames;
  title?: string;
  paragraph?: string;
};

export function ListItem({
  icon,
  title,
  paragraph,
  iconColor = "onSurfacePrimary",
  bgIconColor = "onSurfaceDisabled",
  ...rest
}: ListItemProps) {
  return (
    <ListItemContainer {...rest}>
      {icon && (
        <ListItemWrapperIcon $bgColor={bgIconColor}>
          <ListItemIcon color={iconColor} name={icon} />
        </ListItemWrapperIcon>
      )}

      <ListItemContent>
        {title && <ListItemTitle>{title}</ListItemTitle>}
        {paragraph && <ListItemParagraph>{paragraph}</ListItemParagraph>}
      </ListItemContent>
      {rest.onPress && (
        <ListItemWrapperRight>
          <ListItemChevron name="chevron-right" />
        </ListItemWrapperRight>
      )}
    </ListItemContainer>
  );
}
