interface User {
  id: number;
  is_author: boolean;
  username: string;
}

interface Payload {
  id: number;
  is_author: boolean;
  username: string;
  exp: number;
}

interface AuthContextType {
  user: User | null;
  signin: (user: User) => void;
  signout: () => void;
  apiUrl: string;
  getUserData: () => User | null;
}

interface Post {
  uploadedAt: string;
  id: number;
  author: string;
  title: string;
  content: string;
}

interface Comment {
  uploadedAt: string;
  id: number;
  author: string;
  content: string;
}

export type { User, Payload, AuthContextType, Post, Comment };
