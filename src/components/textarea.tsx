import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea = ({ ...props }: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className="border-b border-b-accent-400 w-full outline-none p-3"
    />
  );
};

export default TextArea;
