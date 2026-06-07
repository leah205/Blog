import React, { useState, createContext } from "react";
import { jwtDecode } from "jwt-decode";

interface User {
  id: number;
  is_author: boolean;
  username: string;
}

interface Payload {
  id: number;
  is_author: boolean;
  username: string;
  exp: string;
}

interface AuthContextType {
  user: User | null;
  signin: (user: User) => void;
  signout: () => void;
}

function loadInitialUserData() {
  const token = localStorage.getItem("token");

  if (token) {
    const decoded = jwtDecode<Payload>(token);
    // const expDate = new Date(decoded.exp);
    // if (Date.now() > expDate.getTime()) {
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("tokenExpTime");
    // } else {
    return {
      id: decoded.id,
      username: decoded.username,
      is_author: decoded.is_author,
    };

    //}
  }
  return null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(loadInitialUserData());

  const signin = (user: User) => {
    setUser(user);
  };

  const signout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signin, signout, user }}>
      {children}
    </AuthContext.Provider>
  );
}
