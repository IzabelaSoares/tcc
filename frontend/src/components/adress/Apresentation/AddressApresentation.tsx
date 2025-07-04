import AddressList from "../AddressList";
import AddressButtons from "../AddressButtons";
import { EnderecoResponseDTO } from "../../../../dtos/endereco/EnderecoResponse";

interface props {
  onEdit: (endereco: EnderecoResponseDTO) => void;
  onRemove: (id: string) => void;
  enderecos: EnderecoResponseDTO[];
  onReturn: () => void;
  onCreate: () => void;
}

export default function AddressApresentation({
  enderecos,
  onEdit,
  onRemove,
  onReturn,
  onCreate
}: props) {
  return (
    <>
      <AddressList enderecos={enderecos} onEdit={onEdit} onRemove={onRemove} />
      <AddressButtons onReturn={onReturn} onCreate={onCreate} />
    </>
  );
}
