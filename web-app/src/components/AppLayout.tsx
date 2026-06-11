import type React from "react";
import { Link } from "react-router-dom";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // context for whether there is a user - sign in / stay out
  return (
    <>
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
            <Link to="/">Signout</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
