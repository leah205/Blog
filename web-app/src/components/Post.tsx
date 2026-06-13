import type React from "react";
import { useQuery } from "@tanstack/react-query";
import query from "../utils/query";
//import type { Post } from "../types/types";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import ContentLayout from "./ui/ContentLayout";
import formatDate from "../utils/formatDate";

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
    return <ContentLayout>Loading...</ContentLayout>;
  }
  if (isError) {
    console.error(error);
    return (
      <ContentLayout>Sorry! Something went wrong on our end</ContentLayout>
    );
  }
  return (
    <ContentLayout>
      <h1 className="text-3xl">{data.title}</h1>
      <p className="text-2xl">{data.author.username}</p>
      <p className="text-2xl">{formatDate(data.uploadedAt)}</p>
      <p className="text-xl">{data.content}</p>
    </ContentLayout>
  );
}
