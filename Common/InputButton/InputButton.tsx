import React, { useRef, ChangeEvent } from "react";
import style from "./InputButton.module.scss";
import { GoPaperclip } from "react-icons/go";
interface FileUploadInputProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  icon?: IconType;
}

const InputButton: React.FC<FileUploadInputProps> = ({
  onFileSelect,
  accept,
  icon = GoPaperclip,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = (): void => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };
  return (
    <div
      style={{
        width: "40%",
        alignSelf: "left",
        backgroundColor: "f7f7ff",
        padding: ".5rem",
        display: "flex",
        gap: "1rem",
      }}
    >
      <form onClick={() => document.querySelector(".input-field").click()}>
        {React.createElement(icon, {})}
        <span>File attachment</span>
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={accept}
          hidden
        />
      </form>
    </div>
  );
};

export default InputButton;
