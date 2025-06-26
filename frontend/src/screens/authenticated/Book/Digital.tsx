import { View } from "react-native";
import { BookContent, BookDigitalTitle } from "../../../components/book";

export default function Digital() {
  return (
    <View className="flex-1 bg-primary pt-24">
      <BookDigitalTitle />
      <BookContent />
    </View>
  );
}
