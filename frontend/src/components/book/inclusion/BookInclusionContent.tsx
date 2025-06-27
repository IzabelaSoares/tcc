import { Text, View } from "react-native";
import { ContentCard } from "../../ui";
import BookInclusionForm from "./BookInclusionForm";

export default function BookInclusionContent() {
  return (
    <ContentCard top={0.2}>
      <View className="mt-4">
        <BookInclusionForm />
      </View>
    </ContentCard>
  );
}
