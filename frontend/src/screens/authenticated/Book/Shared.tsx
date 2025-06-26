import { View } from "react-native";
import { BookContent, BookSharedTitle } from "../../../components/book";

export default function Shared() {
  return (
    <View className="flex-1 bg-primary pt-24">
      <BookSharedTitle />
      <BookContent />
    </View>
  );
}
