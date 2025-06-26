import { View } from "react-native";
import BookItemDetailsTitle from "./BookItemDetailsTitle";
import BookItemDetailsButton from "./BookItemDetailsButton";
import BookItemDetailsInformation from "./BookItemDetailsInformation";

export default function BookItemDetails() {
  return (
    <View className="h-20">
      <BookItemDetailsTitle />
      <BookItemDetailsInformation />
      <BookItemDetailsButton />
    </View>
  );
}
