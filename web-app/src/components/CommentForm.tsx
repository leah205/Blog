import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import Form from "./ui/Form";
import InputField from "./ui/InputField";

export default function CommentForm() {
  const [content, setContent] = useState<string>("");

  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("no auth context found!");
  }

  const { getUserData } = context;
  const user = getUserData();
  console.log(user);
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
      </Form>
    );
  }

  return <p>sign in to comment!</p>;
}
