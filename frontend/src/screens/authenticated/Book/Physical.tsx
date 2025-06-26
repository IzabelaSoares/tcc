import { View } from "react-native";
import { BookContent, BookPhysicalTitle } from "../../../components/book";

export default function Physical() {
  return (
    <View className="flex-1 bg-primary pt-24">
      <BookPhysicalTitle />
      <BookContent />
    </View>
  );
}
