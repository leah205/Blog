import { AuthContext } from "./AuthContext";
import React, { useContext } from "react";
import usePostsQuery from "../hooks/usePostsQuery";
import type { Post } from "../types/types";

function PostsLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default function PostsPage() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth context does not exist");
  }
  const { apiUrl } = context;

  const posts_info = usePostsQuery(apiUrl);

  if (posts_info.isError) {
    return <PostsLayout>{posts_info.error.message}</PostsLayout>;
  }

  if (posts_info.isPending) {
    return <PostsLayout>loading...</PostsLayout>;
  }

  if (posts_info.isSuccess && posts_info.data.length > 0) {
    return (
      <PostsLayout>
        {console.log(posts_info.data)}
        {posts_info.data.map((post: Post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          );
        })}
      </PostsLayout>
    );
  }

  return <PostsLayout>No posts yet!</PostsLayout>;
}
