import React, { useState, createContext } from "react";
import { jwtDecode } from "jwt-decode";
import type { User, Payload, AuthContextType } from "../types/types";
import { useNavigate } from "react-router-dom";

function getUserData() {
  const token = localStorage.getItem("token");

  if (token) {
    const decoded = jwtDecode<Payload>(token);
    const now = Date.now() / 1000;

    if (decoded.exp && now > decoded.exp) {
      localStorage.removeItem("token");
      return null;
    }
    return {
      id: decoded.id,
      username: decoded.username,
      is_author: decoded.is_author,
    };
  }
  return null;
}

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   signin: (null) => {},
//   signout: () => {},
//   apiUrl = ""

// });

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(getUserData());

  const apiUrl = import.meta.env.VITE_API_URL;
  const signin = (user: User) => {
    setUser(user);
  };

  const signout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ signin, signout, user, apiUrl }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
