import React, { useState } from "react";
import styles from "./Modal.module.scss";
import { RiCloseLine } from "react-icons/ri";

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
  const requestoptions = [
    { value: "", label: "" },
    { value: "Service Request", label: "Service Request" },
    { value: "Incident", label: "Incident" },
  ];
  const handleChange = (id) => (e) => {
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
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Create Ticket</h5>
          </div>
          {/* <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button> */}
          <div className={styles.modalContent}>
            <div className={styles.firstline}>
              <Modal label="Request Type" options={requestoptions} />
              <Modal label={"Category"} />
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
