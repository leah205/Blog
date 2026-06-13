import { AuthContext } from "./AuthContext";
import React, { useContext } from "react";
import usePostsQuery from "../hooks/usePostsQuery";
import type { Post } from "../types/types";
import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

function PostsLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-10 m-20">{children}</div>;
}

function PostCard({ post }: { post: Post }) {
  console.log(post);
  return (
    <div className=" text-center p-6 rounded-md border-1 border-mist-400 shadow-sm w-50 h-50">
      <h2 className="text-xl">
        <Link to={`${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.author.username}</p>
      <p>{formatDate(post.uploadedAt)}</p>
    </div>
  );
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
          return <PostCard key={post.id} post={post}></PostCard>;
        })}
      </PostsLayout>
    );
  }

  return <PostsLayout>No posts yet!</PostsLayout>;
}
