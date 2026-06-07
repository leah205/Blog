import type React from "react";

interface Props {
  children: React.ReactNode;
  type: "submit" | "button";
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, type, className, onClick }: Props) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
