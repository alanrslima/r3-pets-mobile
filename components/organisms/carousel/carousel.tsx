import { Dimensions } from "react-native";
import RNCarousel, {
  AdditionalParallaxProps,
} from "react-native-snap-carousel";

export type CarouselProps<T> = {
  data: readonly T[];
  sliderWidth?: number;
  itemWidth?: number;
  renderItem(
    item: { item: T; index: number },
    parallaxProps?: AdditionalParallaxProps
  ): React.ReactNode;
};

export function Carousel<T>({ data, renderItem, ...rest }: CarouselProps<T>) {
  return (
    <RNCarousel
      data={data}
      renderItem={renderItem as any}
      sliderWidth={Dimensions.get("screen").width}
      {...rest}
    />
  );
}
