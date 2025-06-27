import { ContentCard, FloatButton } from "../ui";
import BookItem from "./BookItem";

export default function BookContent() {
  return (
    <ContentCard top={0.2}>
      <BookItem />
      <BookItem />
      <FloatButton routeName="Inclusion" />
    </ContentCard>
  );
}
