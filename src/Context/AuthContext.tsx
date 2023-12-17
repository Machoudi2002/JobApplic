import { ReactNode, createContext, useState } from "react";
import axios from "axios";
import { LoginData } from "../types";
import { useNavigate } from "react-router-dom";

export interface AuthContextProps {
    isAuth: boolean;
    login: (Data : LoginData) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider : React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {
        return localStorage.getItem("isAuth") === "true";
      });
    let navigate = useNavigate()

    const login = async (Data: LoginData): Promise<string | null> => {
        const API_URL = `${import.meta.env.VITE_WEBSITE_DOMAIN}/LoginAdmin`;
        try {
          await axios.post(API_URL, Data);
          setIsAuth(true);
          localStorage.setItem("isAuth", "true");
          navigate("/Admin");
          return null; // No error message if login is successful
        } catch (error) {
          if (
            axios.isAxiosError(error) &&
            error.response &&
            error.response.status === 401
          ) {
            console.error('Authentication failed:', error.response.data.error);
            return error.response.data.error;
          } else {
            console.error('An unexpected error occurred:', error);
            return "Unexpected error occurred, try again";
          }
        }
      };
      
      
      
    
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("isAuth");
      };

    return (
        <AuthContext.Provider value={{ isAuth , login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}