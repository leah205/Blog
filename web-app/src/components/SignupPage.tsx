import Button from "./ui/Button";
import Form from "./ui/Form";
import InputField from "./ui/InputField";
import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import useSignupMutation from "../hooks/useSignupMutation";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState<string[] | never[]>([]);
  console.log(errors);
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("auth context is not defined");
  }
  const { apiUrl } = context;

  const signupMutation = useSignupMutation(apiUrl, setErrors);

  function handleSubmit() {
    signupMutation.mutate({
      username: username,
      password: password,
      password_confirm: confirmPassword,
    });
  }
  return (
    <>
      <ul>
        {errors &&
          errors.map((error) => {
            return <li>{error}</li>;
          })}
      </ul>
      <Form>
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
        <InputField
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="password_confirm"
          type="text"
          label="Confirm Password"
        ></InputField>
        <Button type="submit" className="auth_btn" click={handleSubmit}>
          Sign up
        </Button>
      </Form>
    </>
  );
}
