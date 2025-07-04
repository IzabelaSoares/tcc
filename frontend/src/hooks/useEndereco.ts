import { EnderecoCreateRequestDTO } from "../../dtos/endereco/EnderecoCreateRequest";
import { EnderecoUpdateRequestDTO } from "../../dtos/endereco/EnderecoUpdateRequest";
import { EnderecoResponseDTO } from "../../dtos/endereco/EnderecoResponse";
import {
  createAddress,
  deleteAddress,
  searchAddress,
  updateAddress,
} from "../data/endereco/enderecoApi";
import { EnderecoApresentationDTO } from "../../dtos/endereco/EnderecoApresentation";

export default function useEndereco() {
  const cadastrar = async (cadastro: EnderecoCreateRequestDTO) => {
    await createAddress(cadastro)
      .then((response) => {
        console.log("Endereço cadastrado com sucesso:", response);
        return response;
      })
      .catch((error) => {
        console.error("Erro ao cadastrar endereço:", error);
        throw error;
      });
  };

  const atualizar = async (atualizacao: EnderecoUpdateRequestDTO) => {
    await updateAddress(atualizacao)
      .then((response) => {
        console.log("Endereço atualizaco com sucesso:", response);
        return response;
      })
      .catch((error) => {
        console.error("Erro ao atualizar:", error);
        throw error;
      });
  };

  const removerEndereco = async (id: string) => {
    await deleteAddress(id)
      .then((response) => {
        console.log("Endereço removido com sucesso:", response);
        return response;
      })
      .catch((error) => {
        console.error("Erro ao remover endereço:", error);
        throw error;
      });
  };

  const buscarEnderecos = async (): Promise<EnderecoResponseDTO[]> => {
    return await searchAddress()
      .then((response) => {
        console.log("Endereços do usuário buscado com sucesso:", response);
        return response;
      })
      .catch((error) => {
        console.error("Erro ao buscar endereços do usuário:", error);
        throw error;
      });
  };

  const formatarEndereco = ({
    titulo,
    id,
    rua,
    bairro,
    cidade,
    estado,
    cep,
  }: EnderecoResponseDTO): EnderecoApresentationDTO => {
    return {
      title: titulo,
      key: id,
      address: `${rua} - ${bairro}, ${cidade} - ${estado}, ${cep}`,
    };
  };

  return {
    cadastrar,
    atualizar,
    removerEndereco,
    buscarEnderecos,
  };
}
