import React from "react";
import styles from "./Dropdown.module.scss";
import Label from "@/Common/Label/Label";
interface dropdownprops {
  label?: string;
  options: { label: string; value: string }[];
  value: string;
  id: string;
  hasError?: boolean;
  onChange: React.FC;
  style?: React.CSSProperties;
}
const Dropdown = ({
  label,
  options,
  onChange,
  value,
  id,
  hasError = false,
  style,
}: dropdownprops) => {
  return (
    <div className={styles.dropdown} style={style}>
      <Label
        htmlFor={id}
        text={label}
        className={hasError ? styles["label--error"] : ""}
      />
      <select
        id={id}
        className={`${styles.select} ${
          hasError ? styles["select--error"] : ""
        }`}
        onChange={onChange}
        value={value}
      >
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
