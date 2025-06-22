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
    <Card className="h-[120px] w-full rounded-[1rem] bg-primary-dark shadow p-4 mt-6 flex-row justify-between items-center" >
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
