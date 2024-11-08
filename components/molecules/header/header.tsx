import { IconButton } from "@/components/atoms";
import { HeaderContainer } from "./header.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HeaderProps = {
  float?: boolean;
};

export function Header(props: HeaderProps) {
  const { top } = useSafeAreaInsets();

  return (
    <HeaderContainer $float={props.float} $safeAreaInsetTop={top}>
      <IconButton name="chevron-left" />
    </HeaderContainer>
  );
}
