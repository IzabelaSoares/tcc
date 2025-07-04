import { View } from "react-native";
import AddressItem from "./AddressItem";
import { EnderecoApresentationDTO } from "../../../dtos/endereco/EnderecoApresentation";
import { EnderecoResponseDTO } from "../../../dtos/endereco/EnderecoResponse";

const items = [
  {
    key: "1",
    title: "Escola",
    address:
      "Rua Dr. Pedro Zimmermann, 2461 - Itoupavazinha, Blumenau - SC, 89066-000",
  },
  {
    key: "2",
    title: "Parque",
    address:
      "Rua Dr. Pedro Zimmermann, 2461 - Itoupavazinha, Blumenau - SC, 89066-000",
  },
  {
    key: "3",
    title: "Biblioteca",
    address:
      "Rua Dr. Pedro Zimmermann, 2461 - Itoupavazinha, Blumenau - SC, 89066-000",
  },
];

interface props {
  onEdit: (endereco: EnderecoResponseDTO) => void;
  onRemove: (id: string) => void;
  enderecos: EnderecoResponseDTO[];
}

export default function AddressList({ enderecos, onEdit, onRemove }: props) {
  return (
    <View className="mt-8 mx-4">
      {enderecos.map((endereco) => (
        <AddressItem
          key={endereco.id}
          endereco={endereco}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ))}
    </View>
  );
}
