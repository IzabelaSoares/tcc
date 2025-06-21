import { View, Text } from "react-native";

interface props {
    titulo: string;
    totalPaginas: string;
    totalLido: string;
    ultimaLeitura: string;
}


export default function BookCardDetails({
    titulo, totalLido, totalPaginas, ultimaLeitura
}: props) {
  return (
    <View className="flex-1 items-start">
      <Text className="text-white font-semibold text-xl">{titulo}</Text>
      <Text className="text-white text-base pt-2">Páginas lidas {totalLido}/{totalPaginas}</Text>
      <Text className="text-white text-base pt-2">
        Última leitura {ultimaLeitura}
      </Text>
    </View>
  );
}
