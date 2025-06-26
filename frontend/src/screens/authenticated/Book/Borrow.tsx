import { View } from "react-native";
import { BookBorrowTitle, BookContent } from "../../../components/book";

export default function Borrow() {
  return (
    <View className="flex-1 bg-primary pt-24">
      <BookBorrowTitle />
      <BookContent />
    </View>
  );
}
