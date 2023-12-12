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
        // Initialize isAuth based on the stored value in localStorage
        return localStorage.getItem("isAuth") === "true";
      });
    let navigate = useNavigate()

    const login = async (Data : LoginData) => {
        const API_URL = `${import.meta.env.VITE_WEBSITE_DOMAIN}/LoginAdmin`
        try {
            await axios.post(API_URL, Data);
            setIsAuth(true)
            localStorage.setItem("isAuth", "true");
            navigate("/Admin")

        } catch (error) {

            if (axios.isAxiosError(error) && error.response) {
                console.error('Login error:', error.response.data.error);
            } else {
                console.error('An unexpected error occurred:', error);
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