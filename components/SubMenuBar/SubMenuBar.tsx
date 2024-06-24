"use client";
import { useState } from "react";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../SubMenuBar/SubMenuBar.module.scss";
import React from "react";

const SubMenuBar = ({ item }: any) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => setSubMenuOpen(!subMenuOpen);
  return (
    <>
      {item.submenu ? (
        <>
          <div className={styles.tile} onClick={toggleSubMenu}>
            <span className={styles.sideText}>
              {item.icon}
              <li key={item.id}>{item.title}</li>
            </span>
            <span className={subMenuOpen ? styles.opened : ""}>
              <ExpandMoreIcon />
            </span>
          </div>
          {subMenuOpen && (
            <>
              {item.submenuitems?.map((item: any) => (
                <Link
                  key={item.id}
                  className={styles.link}
                  href={`${item.path}`}
                >
                  <li className={styles.subText}>{item.title}</li>
                </Link>
              ))}
            </>
          )}
        </>
      ) : (
        <>
          <Link href={`${item.path}`} className={styles.link}>
            <span className={styles.sideText}>
              {item.icon}
              <span className="font-semibold text-xl flex">{item.title}</span>
            </span>
          </Link>
        </>
      )}
    </>
  );
};

export default SubMenuBar;
