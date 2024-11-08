import { Card, Screen } from "@/components";
import { Link } from "expo-router";
import { Button, ScrollView, View } from "react-native";

export default function IndexScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </Screen>
  );
}
