"use Client";
import React from "react";

const page = ({ params }: any) => {
  const design = { width: "80%", display: "flex", justifyContent: "center" };
  return (
    <div style={design}>
      <h2>ticket number {params.ticketId}</h2>
    </div>
  );
};

export default page;
