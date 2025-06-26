import { View } from "react-native";
import { BookCategoryList, BookTitle } from "../../../components/book";

export default function Book() {
  return (
    <View className="flex-1 bg-primary pt-24">
      <BookTitle />
      <BookCategoryList />
    </View>
  );
}
