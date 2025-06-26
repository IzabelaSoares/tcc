import { View } from "react-native";
import BookCategoryCard from "./BookCategoryCard";
import { ContentCard } from "../ui";

export default function BookCategoryList() {
  return (
    <ContentCard top={0.2}>
      <View className="mt-4">
        <BookCategoryCard
          title="Livros digitais"
          routeName={"Digital"}
          count={3}
        />
        <BookCategoryCard
          title="Livros fisicos"
          routeName={"Physical"}
          count={3}
        />
        <BookCategoryCard
          title="Pegos emprestados"
          routeName={"Borrow"}
          count={2}
        />
        <BookCategoryCard
          title="Compartilhados"
          routeName={"Shared"}
          count={5}
        />
        <BookCategoryCard
          title={"Favoritos"}
          routeName={"Favorite"}
          count={2}
        />
        <BookCategoryCard
          title="Lidos"
          routeName={"Read"}
          count={1}
        />
      </View>
    </ContentCard>
  );
}
