import Button from "./ui/Button";
import Form from "./ui/Form";
import InputField from "./ui/InputField";
import { useState } from "react";

export default function SigninPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
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

      <Button type="submit" className="auth_btn" onClick={() => {}}>
        Sign In
      </Button>
    </Form>
  );
}
