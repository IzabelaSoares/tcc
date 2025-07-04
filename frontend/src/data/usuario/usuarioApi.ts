import { UsuarioCreateRequestDTO } from "../../../dtos/usuario/UsuarioCreateRequest";
import { UsuarioCreateResponseDTO } from "../../../dtos/usuario/UsuarioCreateResponse";
import { UsuarioUpdatePasswordRequestDTO } from "../../../dtos/usuario/UsuarioUpdatePasswordRequest";
import { UsuarioUpdateRequestDTO } from "../../../dtos/usuario/UsuarioUpdateRequest";
import api from "../../services/api";

export async function createUser(cadastro: UsuarioCreateRequestDTO): Promise<UsuarioCreateResponseDTO> {
  const resposta = await api.post("/usuario", cadastro);
  return resposta.data;
}

export async function updateUser(alteracao: UsuarioUpdateRequestDTO): Promise<UsuarioCreateResponseDTO> {
  const resposta = await api.put("/usuario", alteracao);
  return resposta.data;
}

export async function updatePasswordUser(updatePasswordUser: UsuarioUpdatePasswordRequestDTO): Promise<void> {
  const resposta = await api.put("/usuario/senha", updatePasswordUser);
  return resposta.data;
}
