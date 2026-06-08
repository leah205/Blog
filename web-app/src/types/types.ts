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
  apiUrl: string;
}

export type { User, Payload, AuthContextType };
