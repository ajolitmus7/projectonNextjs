// src/components/TextArea.tsx

import React from "react";
import Label from "../Label/Label";

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  cols?: number;
  className?: string;
  errorMessage?: string;
  text?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder = "",
  rows = 4,
  cols = 50,
  className = "",
  errorMessage = "",
  text,
}) => {
  return (
    <div
      className={`text-area-container ${className}`}
      style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}
    >
      <Label text={text} />
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className={`text-area ${errorMessage ? "error" : ""}`}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default TextArea;
