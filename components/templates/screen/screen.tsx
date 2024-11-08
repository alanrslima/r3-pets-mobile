import { ReactNode } from "react";
import { ScreenContainer } from "./screen.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "@/components/molecules";

type ScreenProps = {
  children: ReactNode;
  useTopSafeArea?: boolean;
  useBottomSafeArea?: boolean;
};

export function Screen({
  useBottomSafeArea = true,
  useTopSafeArea = true,
  children,
}: ScreenProps) {
  const { top, bottom } = useSafeAreaInsets();

  const marginBottom = useBottomSafeArea ? bottom : 0;
  const marginTop = useTopSafeArea ? top : 0;

  return (
    <ScreenContainer $marginBottom={marginBottom} $marginTop={marginTop}>
      <Header float />
      {children}
    </ScreenContainer>
  );
}
