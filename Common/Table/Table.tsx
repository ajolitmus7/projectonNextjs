"use client";
import React from "react";
import Table from "@mui/joy/Table";
import { useRouter } from "next/navigation";
const TableS = ({ data }: any) => {
  const router = useRouter();
  const handleClick:
    | React.MouseEventHandler<HTMLTableRowElement>
    | undefined = (code: any) => {
    router.push(`/tickets/${code}`);
  };
  return (
    <Table aria-label="basic table">
      <thead>
        <tr>
          {Object.keys(data[0]).map((value, id) => (
            <th key={id}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.values(data).map((item: any, id) => (
          <tr key={id} onClick={() => handleClick(item.referenceCode)}>
            <th>{item.Sno}</th>
            <th>{item.data}</th>
            <th>{item.referenceCode}</th>
            <th>{item.status}</th>
            <th>{item.title}</th>
            <th>{item.category}</th>
            <th>{item.eta}</th>
            <th>{item.expectedEta}</th>
            <th style={{ width: "1rem" }}>{item.description}</th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableS;
