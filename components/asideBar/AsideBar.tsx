import React, { useState } from "react";
import styles from "../asideBar/AsideBar.module.scss";
import { dataSet } from "../../data/JsonData/asideData";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { list } from "postcss";
import { styled } from "@mui/material/styles";
import SubMenuBar from "../SubMenuBar/SubMenuBar";
const AsideBar = () => {
  return (
    <div className={styles.main}>
      {/* <ul>
        {dataSet.map(({ id, title, icon, submenu, path, submenuitems }) => (
          <>
            <Link
              style={{
                display: "flex",
                padding: "1rem",
                textDecoration: "none",
                color: "white",
                justifyContent: "space-between",
                border: "1px solid blue",
                alignItems: "center",
              }}
              href={`${path}`}
            >
              <span className={styles.sideText}>
                {icon}
                <li key={id}>{title}</li>
              </span>
              <span className={styles.opened }>
                 <ExpandMoreIcon />
              </span>
            </Link>
          </>
        ))}
      </ul> */}
      <ul>
        {dataSet.map((item, id) => {
          return <SubMenuBar key={id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default AsideBar;
