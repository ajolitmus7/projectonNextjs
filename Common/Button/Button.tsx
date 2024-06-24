import { Style } from "@mui/icons-material";
import React, { CSSProperties, FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}
import style from "../Button/Button.module.scss";
const Button: FC<ButtonProps> = ({ children, style, onClick }: any) => {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
