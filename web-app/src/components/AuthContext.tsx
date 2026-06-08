import React, { useState, createContext } from "react";
import { jwtDecode } from "jwt-decode";
import type { User, Payload, AuthContextType } from "../types/types";

function loadInitialUserData() {
  const token = localStorage.getItem("token");

  if (token) {
    const decoded = jwtDecode<Payload>(token);

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
  const [user, setUser] = useState<User | null>(loadInitialUserData());

  const apiUrl = import.meta.env.VITE_API_URL;
  const signin = (user: User) => {
    setUser(user);
  };

  const signout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signin, signout, user, apiUrl }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
