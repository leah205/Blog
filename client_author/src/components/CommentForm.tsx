import { useActionState, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import Form from "./ui/Form";
import InputField from "./ui/InputField";
import Button from "./ui/Button";
import useCommentMutation from "../hooks/useCommentMutation";
import { useParams } from "react-router-dom";
import ValidationError from "./ui/ValidationError";

export default function CommentForm() {
  const [content, setContent] = useState<string>("");
  const [commentFormOpen, setCommentFormOpen] = useState(false);

  const [errors, setErrors] = useState<string[] | undefined>(undefined);
  const params = useParams();
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("no auth context found!");
  }
  const { user, apiUrl } = context;

  if (params.postid == undefined) {
    throw new Error("no post found!");
  }

  const commentMutation = useCommentMutation(apiUrl, params.postid, setErrors);

  if (user) {
    function handleSubmit() {
      commentMutation.mutate({
        content: content,
        authorId: user.id,
        postid: params.postid,
      });
      setContent("");
      setCommentFormOpen(false);
    }

    if (!commentFormOpen) {
      return (
        <Button
          type="button"
          className="w-40 m-auto"
          click={() => setCommentFormOpen(true)}
        >
          New Comment
        </Button>
      );
    }

    return (
      <Form>
        <ul>
          {errors?.map((err) => (
            <ValidationError>{err}</ValidationError>
          ))}
        </ul>
        <div className="flex justify-between content-center items-center">
          <InputField
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
            type="textarea"
            className="h-20"
            label="New Comment:"
          ></InputField>
          <Button type="submit" className="h-15" click={handleSubmit}>
            Post
          </Button>
        </div>
      </Form>
    );
  }

  return <ValidationError>sign in to comment!</ValidationError>;
}
