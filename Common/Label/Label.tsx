import React from "react";
import styles from ",/Label.module.scss";
interface labelProps {
  htmlFor: string;
  text: string;
  className: string;
}
const Label = ({ htmlFor, text, className = "" }: labelProps) => {
  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${className}`}>
      {text}
    </label>
  );
};

export default Label;
