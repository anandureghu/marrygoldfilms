import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      {...props}
      className="border-b border-b-accent-400 w-full outline-none p-3"
    />
  );
};

export default Input;
