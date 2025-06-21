import { Card } from "../ui";
import BookCardDetails from "./BookCardDetails";
import BookCardProgress from "./BookCardProgress";

interface props {
  percentage: number;
  titulo: string;
  totalPaginas: string;
  totalLido: string;
  ultimaLeitura: string;
}

export default function BookCard({
  percentage,
  titulo,
  totalLido,
  totalPaginas,
  ultimaLeitura,
}: props) {
  return (
    <Card>
      <BookCardProgress percentage={percentage} />
      <BookCardDetails
        titulo={titulo}
        totalLido={totalLido}
        totalPaginas={totalPaginas}
        ultimaLeitura={ultimaLeitura}
      />
    </Card>
  );
}
