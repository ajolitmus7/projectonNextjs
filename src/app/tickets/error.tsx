"use client";
import React from "react";

const error = ({ error }: any) => {
  const design = { width: "80%", display: "flex", justifyContent: "center" };
  return (
    <div style={design}>
      <h2>ERROR FOUND {error.message}</h2>
    </div>
  );
};

export default error;
