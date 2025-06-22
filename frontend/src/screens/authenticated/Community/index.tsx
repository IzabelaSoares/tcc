import { View, Text } from "react-native";
import { LogoTitle } from "../../../components/logo";
import { ContentCard, BulletItem } from "../../../components/ui";

export default function Community() {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <LogoTitle textColor="text-white" />
      <ContentCard>
        <View className="justify-center items-center mt-8">
          <Text className="text-2xl font-bold">Em breve:</Text>
          <Text className="text-2xl font-bold">nossa Comunidade!</Text>
          <BulletItem
            className="text-xl"
            text={
              "Conecte-se com outros leitores em tópicos por tema, autor ou livro."
            }
          />
          <BulletItem
            className="text-xl"
            text={
              "Participe de discussões, troque ideias e compartilhe obras relacionadas."
            }
          />
          <BulletItem
            className="text-xl"
            text={
              "Um espaço feito para quem ama ler e conversar sobre leitura."
            }
          />
        </View>
      </ContentCard>
    </View>
  );
}
