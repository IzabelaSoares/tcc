import { AuthRequestDTO } from "../../dtos/auth/AuthRequest";
import { AuthUserDTO } from "../../dtos/auth/AuthUser";

export type AuthContextType = {
  user: AuthUserDTO | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (credentials: AuthRequestDTO) => Promise<void>;
  logout: () => void;
};
