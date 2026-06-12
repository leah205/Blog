import useSigninMutation from "../hooks/useSigninMutation";
import Button from "./ui/Button";
import Form from "./ui/Form";
import InputField from "./ui/InputField";
import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function SigninPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<string[] | undefined>(undefined);
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("auth context is not defined");
  }

  const { apiUrl, signin } = context;

  const signinMutation = useSigninMutation(apiUrl, setErrors, signin);
  function handleSubmit() {
    signinMutation.mutate({
      username: username,
      password: password,
    });
  }

  return (
    <Form>
      <ul>
        {errors &&
          errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
      </ul>
      <InputField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        type="text"
        label="Username"
      ></InputField>
      <InputField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        type="text"
        label="Password"
      ></InputField>
      <Button type="submit" className="auth_btn" click={handleSubmit}>
        Sign In
      </Button>
    </Form>
  );
}
