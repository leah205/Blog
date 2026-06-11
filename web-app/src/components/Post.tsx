import type React from "react";
import { useQuery } from "@tanstack/react-query";
import query from "../utils/query";
//import type { Post } from "../types/types";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function PostLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default function Post({ postid }: { postid: number }) {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth context does not exist");
  }
  const { apiUrl } = context;
  const { isPending, isError, data, error } = useQuery({
    queryKey: [`posts/${postid}`],
    queryFn: async () => query(`${apiUrl}/posts/${postid}`),
  });

  if (isPending) {
    return <PostLayout>Loading...</PostLayout>;
  }
  if (isError) {
    console.error(error);
    return <PostLayout>Sorry! Something went wrong on our end</PostLayout>;
  }
  return (
    <PostLayout>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </PostLayout>
  );
}
