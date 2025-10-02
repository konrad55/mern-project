import { createContext, type ReactNode } from "react";
import type { AuthContextType } from "../../types";

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export interface AuthContextProviderProps {
  children: ReactNode;
  value: AuthContextType;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
  value,
}) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
