import type React from "react";

interface FormProps {
  children: React.ReactNode;
}

export default function Form({ children }: FormProps) {
  return (
    <form
      method="post"
      className="border-mist-300  border-1 rounded-md p-10 w-1/2 m-auto shadow-md"
    >
      {children}
    </form>
  );
}
