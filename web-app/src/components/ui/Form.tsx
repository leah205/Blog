import type React from "react";

interface FormProps {
  children: React.ReactNode;
}

export default function Form({ children }: FormProps) {
  return <form method="post">{children}</form>;
}
