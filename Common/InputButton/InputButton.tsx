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
        marginBottom: "1rem",
        display: "flex",
        gap: "1rem",
      }}
    >
      <div className={style.box}>
        {React.createElement(icon, {})}
        <span>Add attachment</span>
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={accept}
        />
      </div>
    </div>
  );
};

export default InputButton;
