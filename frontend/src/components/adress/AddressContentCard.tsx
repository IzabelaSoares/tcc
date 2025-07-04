import React, { useEffect, useState } from "react";
import { ContentCard } from "../ui";
import AddressApresentation from "./Apresentation/AddressApresentation";
import AddressEdition from "./Edition/AddressEdition";
import useEndereco from "../../hooks/useEndereco";
import { EnderecoResponseDTO } from "../../../dtos/endereco/EnderecoResponse";
import { EnderecoUpdateRequestDTO } from "../../../dtos/endereco/EnderecoUpdateRequest";
import { EnderecoCreateRequestDTO } from "../../../dtos/endereco/EnderecoCreateRequest";

export default function AddressContentCard() {
  const { buscarEnderecos, removerEndereco, atualizar, cadastrar } =
    useEndereco();
  const [enderecos, setEnderecos] = useState<EnderecoResponseDTO[]>([]);
  const [edicao, setEdicao] = useState<boolean>(false);
  const [ enderecoEdicao, setEnderecoEdicao ] = useState<EnderecoResponseDTO | null>(null)

  useEffect(() => {
    carregarEnderecosUsuario();
  }, []);

  const onEdit = (endereco: EnderecoResponseDTO) => {
    if (endereco.id) {
      atualizar(endereco as EnderecoUpdateRequestDTO);
    } else {
      cadastrar(endereco as EnderecoCreateRequestDTO);
    }
    carregarEnderecosUsuario();
  };

  const onRemove = (id: string) => {
    removerEndereco(id);
    carregarEnderecosUsuario();
  };

  const carregarEnderecosUsuario = async () => {
    const list: EnderecoResponseDTO[] = await buscarEnderecos();
    setEnderecos(list);
    setEnderecoEdicao(null);
    setEdicao(false)
  };

  const Address = () =>
    edicao ? (
      <AddressEdition />
    ) : (
      <AddressApresentation
        enderecos={enderecos}
        onEdit={(endereco) => setEnderecoEdicao(endereco)}
        onRemove={onRemove}
        onReturn={() => setEdicao(false)}
        onCreate={() => setEdicao(true)}
      />
    );

  return (
    <ContentCard top={0.2}>
      <Address />
    </ContentCard>
  );
}
