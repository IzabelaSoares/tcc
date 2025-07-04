import { EnderecoCreateRequestDTO } from "../../../dtos/endereco/EnderecoCreateRequest";
import { EnderecoResponseDTO } from "../../../dtos/endereco/EnderecoResponse";
import { EnderecoUpdateRequestDTO } from "../../../dtos/endereco/EnderecoUpdateRequest";
import api from "../../services/api";

export async function createAddress(cadastro: EnderecoCreateRequestDTO): Promise<EnderecoResponseDTO> {
  const resposta = await api.post("/endereco", cadastro);
  return resposta.data;
}

export async function updateAddress(alteracao: EnderecoUpdateRequestDTO): Promise<EnderecoResponseDTO> {
  const resposta = await api.put("/endereco", alteracao);
  return resposta.data;
}

export async function deleteAddress(id: string): Promise<void> {
  const resposta = await api.delete(`/endereco/${id}`);
  return resposta.data;
}

export async function searchAddress(): Promise<EnderecoResponseDTO[]> {
  const resposta = await api.get("/endereco");
  return resposta.data;
}