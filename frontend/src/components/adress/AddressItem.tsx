import React from "react";
import { View } from "react-native";
import AddressDetails from "./AddressDetails";
import AddressListButtons from "./AddressListButtons";
import { EnderecoResponseDTO } from "../../../dtos/endereco/EnderecoResponse";

interface props {
  onEdit: (endereco: EnderecoResponseDTO) => void;
  onRemove: (id: string) => void;
  endereco: EnderecoResponseDTO;
}

export default function AddressItem({ onEdit, onRemove, endereco }: props) {
  const address = `${endereco.rua} - ${endereco.bairro}, ${endereco.cidade} - ${endereco.estado}, ${endereco.cep}`;

  return (
    <View
      key={endereco.id}
      className="flex flex-row my-2 py-2 border-b-[1px] border-gray-100"
    >
      <AddressDetails title={endereco.titulo} address={address} />
      <AddressListButtons
        onEdit={() => onEdit(endereco)}
        onRemove={() => onRemove(endereco.id)}
      />
    </View>
  );
}
