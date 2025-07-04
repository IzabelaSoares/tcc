import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  use,
} from "react";
import { AuthContextType } from "../types/AuthContextType";
import { getToken, removeToken, saveToken } from "../data/auth/authStorage";
import { login } from "../data/auth/authApi";
import { AuthRequestDTO } from "../../dtos/auth/AuthRequest";
import { AuthUserDTO } from "../../dtos/auth/AuthUser";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: props) => {
  const [user, setUser] = useState<AuthUserDTO | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getToken()
    .then((token) => {
      definirLogin(token as string)
    });
  }, []);

  const loginUser = async (credentials: AuthRequestDTO) => {
    await login(credentials)
      .then((response) => {
        setUser({ email: response.email, nome: response.nome });
        definirLogin(response.token)
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
        throw error;
      });
  };

  const definirLogin = (token: string) => {
    saveToken(token);
    setToken(token);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await removeToken();
    setToken(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login: loginUser, logout, user, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
};
