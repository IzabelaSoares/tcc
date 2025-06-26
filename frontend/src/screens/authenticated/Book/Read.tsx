import { View } from "react-native";
import { BookContent, BookReadTitle } from "../../../components/book";

export default function Read() {
  return (
    <View className="flex-1 bg-primary pt-24">
      <BookReadTitle />
      <BookContent />
    </View>
  );
}
