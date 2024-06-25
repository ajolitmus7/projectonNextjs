import React, { useState } from "react";
import styles from "./Modal.module.scss";
import { RiCloseLine } from "react-icons/ri";
import Dropdown from "../Dropdown/Dropdown";
import { Category } from "@mui/icons-material";
import TextBox from "../TextBox/TextBox";
import TextArea from "../TextArea/TextArea";
import { GoPaperclip } from "react-icons/go";
import InputButton from "../InputButton/InputButton";

const Modal = ({ setIsOpen }: any) => {
  const [dropdownValues, setDropdownValues] = useState({
    dropdown1: "",
    dropdown2: "",
    dropdown3: "",
  });
  const [errors, setErrors] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
  });
  const RequestOptions: { value: string; label: string }[] = [
    { value: "", label: "" },
    { value: "Service Request", label: "Service Request" },
    { value: "Incident", label: "Incident" },
  ];
  const CategoryOptions: { value: string; label: string }[] = [
    {
      value: "",
      label: "",
    },
  ];
  const PriorityOptions: { value: string; label: string }[] = [
    {
      value: "medium",
      label: "medium",
    },
    {
      value: "Urgent",
      label: "Urgent",
    },
    {
      value: "High",
      label: "High",
    },
    {
      value: "Low",
      label: "Low",
    },
  ];
  const handleChange = (id: any) => (e: any) => {
    const { value } = e.target;
    setDropdownValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value === "",
    }));
  };
  const handleFileSelect = (file: File): any => {
    console.log("Selected file:", file);
  };
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Create Ticket</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.firstline}>
              <Dropdown
                label="Request Type"
                options={RequestOptions}
                style={{ width: "50%" }}
              />
              <Dropdown
                label="Category"
                options={CategoryOptions}
                style={{ width: "50%" }}
              />
            </div>
            <div className={styles.secondline}>
              <TextBox text="Title" />
            </div>
            <div className={styles.thirdline}>
              <TextArea rows={10} cols={10} text="Description" />
            </div>
            <div className={styles.fourthline}>
              <InputButton
                onFileSelect={handleFileSelect}
                accept="image/*"
                icon={GoPaperclip}
              />
            </div>
            <div className={styles.fourthline}>
              <Dropdown
                label="Priority"
                options={PriorityOptions}
                style={{ width: "50%" }}
              />
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                cancel
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
