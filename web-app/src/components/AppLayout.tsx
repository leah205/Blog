import type React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // context for whether there is a user - sign in / stay out
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("auth context is not defined");
  }
  const { signout, user } = context;

  return (
    <>
      {user && <h1>Welcome {user.username}</h1>}
      <nav>
        <ul>
          <li>
            <Link to="about">Logo</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
          <li>
            <Link to="signup">Register</Link>
          </li>
          <li>
            <Link to="signin">Login</Link>
          </li>
          <li>
            <Link onClick={signout} to="/">
              Signout
            </Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
