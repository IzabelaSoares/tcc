import { UsuarioCreateRequestDTO } from "../../dtos/usuario/UsuarioCreateRequest";
import { UsuarioUpdatePasswordRequestDTO } from "../../dtos/usuario/UsuarioUpdatePasswordRequest";
import { UsuarioUpdateRequestDTO } from "../../dtos/usuario/UsuarioUpdateRequest";
import {
  createUser,
  updatePasswordUser,
  updateUser,
} from "../data/usuario/usuarioApi";

export default function useUsuario() {
  const cadastrar = async (cadastro: UsuarioCreateRequestDTO) => {
    await createUser(cadastro)
      .then((response) => {
        console.log("Usuário cadastrado com sucesso:", response);
        return response;
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
        throw error;
      });
  };

  const atualizar = async (atualizacao: UsuarioUpdateRequestDTO) => {
    await updateUser(atualizacao)
      .then((response) => {
        console.log("Usuário atualizaco com sucesso:", response);
        return response;
      })
      .catch((error) => {
        console.error("Erro ao atualizar:", error);
        throw error;
      });
  };

  const atualizarSenha = async (senha: UsuarioUpdatePasswordRequestDTO) => {
    await updatePasswordUser(senha)
      .then((response) => {
        console.log("Senha atualizada com sucesso:", response);
        return response;
      })
      .catch((error) => {
        console.error("Erro ao atualizar senha:", error);
        throw error;
      });
  };

  return {
    cadastrar,
    atualizar,
    atualizarSenha,
  };
}
