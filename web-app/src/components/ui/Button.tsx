import type React from "react";

interface Props {
  children: React.ReactNode;
  type: "submit" | "button";
  className: string;
  click: () => void;
}

export default function Button({ children, type, className, click }: Props) {
  return (
    <button
      className={className}
      type={type}
      onClick={(e) => {
        click();
        e.preventDefault();
      }}
    >
      {children}
    </button>
  );
}
