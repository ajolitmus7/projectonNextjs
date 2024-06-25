import React from "react";
import styles from "../main-header/Mainheader.module.scss";
import Image from "next/image";
import logo from "../../Image/L7logo/l7.png";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const MainHeader = () => {
  return (
    <div className={styles.main}>
      <section className={styles.section1}>
        <Image
          src={logo}
          alt="logo"
          style={{ width: "8rem", height: "4rem", objectFit: "contain" }}
        />
      </section>
      <section className={styles.section2}>
        <div className={styles.left}>
          <MenuIcon fontSize="medium" />
        </div>

        <div className={styles.right}>
          <span>profiler name</span>
          <ArrowDropDownIcon />
        </div>
      </section>
    </div>
  );
};

export default MainHeader;
