import { Paragraph, Surface, Title } from "@/components/atoms";
import { CardContent, CardImage } from "./card.styles";

export function Card() {
  return (
    <Surface>
      <CardImage
        source={{
          uri: "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
      />
      <CardContent>
        <Title>Spaike</Title>
        <Paragraph numberOfLines={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae
          quasi sapiente quaerat iure itaque reprehenderit enim culpa. Tempore,
          nulla autem qui dolor vel eveniet et provident totam necessitatibus
          nam.
        </Paragraph>
      </CardContent>
    </Surface>
  );
}
