import React from "react";
import { useSearchParams } from "next/navigation";

const page = ({ params }: any) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  return (
    <div>
      <h2>ticket number{params.ticketId}</h2>
    </div>
  );
};

export default page;
