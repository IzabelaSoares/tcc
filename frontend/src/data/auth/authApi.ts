import { AuthRequestDTO } from "../../../dtos/auth/AuthRequest";
import { AuthResponseDTO } from "../../../dtos/auth/AuthResponse";
import api from "../../services/api";

export async function login(credentials: AuthRequestDTO): Promise<AuthResponseDTO> {
  const resposta = await api.post("/auth/login", credentials);
  return resposta.data;
}
