"use client";
import React, { useState, useMemo } from "react";
import style from "./ticket.module.scss";
import { IoFilterSharp } from "react-icons/io5";
import { tableData } from "@/data/JsonData/ticketData";
import Button from "@/Common/Button/Button";
import SearchBar from "@/components/searchBar/SearchBar";
import TableS from "@/Common/Table/Table";
import Modal from "@/Common/Modal/Modal";
import CheckBox from "@/Common/Checkbox/Checkbox";
const Ticket = () => {
  const [searchQuery, setSearchQuery] = useState<string>(" ");
  const [active, setActive] = useState<Boolean>(false);
  const [IsOpen, setIsOpen] = useState(false);
  const [check, setCheck] = useState<string[]>([]);
  const [checkvalue, setCheckvalue] = useState("");
  // type: ["Service Request", "Incident", "Events"],
  //Status: ["New", "In-progress", "Resolved", "Invalid"],
  const fields = ["title", "status", "referenceCode", "category"];
  const filterData = (query: string | null, data: any) => {
    if (!query) {
      return data;
    } else {
      return data.filter((item: any) =>
        fields.some((field) => item[field].toLowerCase().includes(query))
      );
    }
  };
  // const dataFiltered = useMemo(
  //   () => filterData(searchQuery, tableData) || tableData,
  //   [searchQuery]
  // );
  const setData = filterData(searchQuery, tableData);
  const dataFiltered = setData.length === 0 ? tableData : setData;
  console.log(IsOpen);
  return (
    <div className={style.content}>
      <div className={style.headerportion}>
        <h2>Ticketing System</h2>
        <div className={style.linecontent}>
          <div className={style.left}>
            <SearchBar setSearchQuery={setSearchQuery} />
            <IoFilterSharp
              style={{ alignSelf: "center" }}
              onClick={() => setActive(!active)}
            />
            <div
              className={`${style.filter} ${
                active ? style.display : style.none
              }`}
            >
              <button
                onClick={() => {
                  setCheckvalue("");
                  setCheck(["New", "In-progress", "Resolved", "Invalid"]);
                }}
              >
                Status
              </button>
              <button
                onClick={() => {
                  setCheckvalue("");
                  setCheck(["Service Request", "Incident", "Events"]);
                }}
              >
                Type
              </button>
            </div>
            <div className={style.checkboxmain}>
              {active &&
                check.map((item: string) => (
                  <CheckBox
                    value={checkvalue}
                    setValue={setCheckvalue}
                    label={item}
                  />
                ))}
            </div>
          </div>
          <div className={style.right}>
            <span style={{ alignSelf: "center" }}>
              showing <b>1-{tableData.length + 1}</b> items{" "}
              <b>{tableData.length + 1}</b>
            </span>
            <button onClick={() => setIsOpen(true)}>create Ticket</button>
          </div>
        </div>
      </div>
      <div className={style.midportion}>
        {dataFiltered && <TableS data={dataFiltered} />}
      </div>
      {IsOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Ticket;
