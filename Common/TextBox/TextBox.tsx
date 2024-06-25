// src/components/TextBox.tsx

import React from "react";
import Label from "../Label/Label";
import styles from "./TextBox.module.scss";
interface TextBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  text?: string;
}

const TextBox: React.FC<TextBoxProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  className = "",
  text,
}) => {
  return (
    <div className={styles.textsetup}>
      <Label text={text} />
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`text-box ${className}`}
      />
    </div>
  );
};

export default TextBox;
