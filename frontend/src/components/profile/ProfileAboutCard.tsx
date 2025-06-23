import React from "react";
import { Text } from "react-native";
import { Card, ContentCard } from "../ui";
import ProfileStatistics from "./ProfileStatistics";

export default function ProfileAboutCard() {
  return (
    <ContentCard top={0.2}>
      <Card className="bg-white justify-top m-4 rounded-2xl" shadow>
        <Text className="text-xl justify-start m-4">
          Apaixonada por histórias e café Sempre achei que bons livros foram
          feitos pra rodar o mundo, não pra juntar poeira na estante. Vamos espalhar páginas
          e gentileza por aí?
        </Text>
      </Card>
      <ProfileStatistics/>
    </ContentCard>
  );
}
