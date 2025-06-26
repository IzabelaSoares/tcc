import { View } from "react-native";
import { ContentCard } from "../../../components/ui";
import { BookFavoriteTitle } from "../../../components/book";
import BookItem from "../../../components/book/BookItem";

export default function Favorite() {
  return (
    <View className="flex-1 bg-primary pt-24">
      <BookFavoriteTitle />
      <ContentCard top={0.2}>
        <BookItem />
        <BookItem />
      </ContentCard>
    </View>
  );
}
