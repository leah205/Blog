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
      className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-sm {className}"
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
