import { FC } from "react";

// src/button.tsx
export const Button: FC<{ name: string }> = ({ name }) => {
  return <button>Provider button {name}</button>;
};
