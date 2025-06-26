import { View } from "react-native";
import BookCategoryCard from "./BookCategoryCard";
import { ContentCard } from "../ui";

export default function BookCategoryList() {
  return (
    <ContentCard top={0.2}>
      <View className="mt-4">
        <BookCategoryCard
          title="Livros digitais"
          routeName={"Favorite"}
          count={3}
        />
        <BookCategoryCard
          title="Livros fisicos"
          routeName={"Favorite"}
          count={3}
        />
        <BookCategoryCard
          title="Pegos emprestados"
          routeName={"Favorite"}
          count={2}
        />
        <BookCategoryCard
          title="Compartilhados"
          routeName={"Favorite"}
          count={5}
        />
        <BookCategoryCard
          title={"Favoritos"}
          routeName={"Favorite"}
          count={2}
        />
        <BookCategoryCard
          title="Lidos"
          routeName={"Favorite"}
          count={1}
        />
      </View>
    </ContentCard>
  );
}
