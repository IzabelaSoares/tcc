import { View } from "react-native";
import { BookInclusionContent, BookInclusionTitle } from "../../../components/book";

export default function Inclusion() {
  return (
    <View className="flex-1 bg-primary pt-24">
      <BookInclusionTitle/>
      <BookInclusionContent/>
    </View>
  );
}
