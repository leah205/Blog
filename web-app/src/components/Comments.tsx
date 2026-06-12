import type React from "react";
import { useQuery } from "@tanstack/react-query";
import query from "../utils/query";
import type { Comment } from "../types/types";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import CommentForm from "./CommentForm";

function CommentsLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default function Comments({ postid }: { postid: number }) {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth context does not exist");
  }
  const { apiUrl } = context;
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["comments", `${postid}`],
    queryFn: async () => query(`${apiUrl}/posts/${postid}/comments`),
  });

  if (isPending) {
    return <CommentsLayout>Loading...</CommentsLayout>;
  }
  if (isError) {
    console.error(error);
    return (
      <CommentsLayout>Sorry! Something went wrong on our end</CommentsLayout>
    );
  }

  if (!data.length) {
    return (
      <CommentsLayout>
        No comments yet, be the first!
        <CommentForm></CommentForm>
      </CommentsLayout>
    );
  }
  return (
    <CommentsLayout>
      {data.map((comment: Comment) => {
        return <div key={comment.id}>{comment.content}</div>;
      })}
      <CommentForm></CommentForm>
    </CommentsLayout>
  );
}
