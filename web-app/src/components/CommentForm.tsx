import { useActionState, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import Form from "./ui/Form";
import InputField from "./ui/InputField";
import Button from "./ui/Button";

export default function CommentForm() {
  //const [content, setContent] = useState<string>("");
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("no auth context found!");
  }

  const { user, signout, apiUrl } = context;
  console.log(user);
  return <p>insert comment form here</p>;

  if (user) {
    return (
      <Form>
        <InputField
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="content"
          type="textarea"
          label="New Comment:"
        ></InputField>
        <Button type="submit" className="" click={handleSubmit}>
          Post
        </Button>
      </Form>
    );
  }

  return <p>sign in to comment!</p>;
}
