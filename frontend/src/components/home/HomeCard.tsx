import BookCard from "../book/BookCard";

export default function HomeCard() {
  return (
    <BookCard
      titulo={"Nome do livro"}
      percentage={30}
      totalLido="100"
      totalPaginas="300"
      ultimaLeitura="10/06/2025"
    />
  );
}
