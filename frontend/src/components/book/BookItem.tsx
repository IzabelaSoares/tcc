import { View } from "react-native";
import BookCoverItem from "./BookCoverItem";
import BookItemDetails from "./BookItemDetails";

export default function BookItem() {
  return (
    <View className="flex-row justify-between mx-4 py-4 border-b-[1px] border-gray-100">
      <BookCoverItem/>
      <BookItemDetails/>
    </View>
  );
}
