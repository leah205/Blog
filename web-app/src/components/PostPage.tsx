import type React from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import Comments from "./Comments";

export default function PostPage() {
  const params = useParams();
  const postid = Number(params.postid);
  return (
    <>
      <Post postid={postid}></Post>
      <Comments postid={postid}></Comments>
    </>
  );
}
