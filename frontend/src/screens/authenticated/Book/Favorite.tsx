import { View } from "react-native";
import { BookContent, BookFavoriteTitle } from "../../../components/book";

export default function Favorite() {
  return (
    <View className="flex-1 bg-primary pt-24">
      <BookFavoriteTitle />
      <BookContent />
    </View>
  );
}
