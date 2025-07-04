import React from "react";
import AddressEditionButtons from "./AddressEditionButtons";
import AddressCard from "./AddressCard";
import AddressEditionForm from "./AddressEditionForm";
import { EnderecoResponseDTO } from "../../../../dtos/endereco/EnderecoResponse";
import { EnderecoUpdateRequestDTO } from "../../../../dtos/endereco/EnderecoUpdateRequest";

interface props {
  endereco?: EnderecoResponseDTO;
  onEdit: (endereco: EnderecoResponseDTO) => void;
  onRemove: (id: string) => void;
  onReturn: () => void;
  onCreate: () => void;
}

export default function AddressEdition() {
  return (
    <>
      <AddressCard />
      <AddressEditionForm/>
      <AddressEditionButtons />
    </>
  );
}
