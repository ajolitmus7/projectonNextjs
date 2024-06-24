import React from "react";
import styles from "./Dropdown.module.scss";
interface dropdownprops {
  label: string;
  options: string[];
  value: string;
  id: string;
  hasError: boolean;
  onChange: React.FC;
}
const Dropdown = ({
  label,
  options,
  onChange,
  value,
  id,
  hasError = false,
}: dropdownprops) => {
  return (
    <div className={styles.dropdown}>
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
