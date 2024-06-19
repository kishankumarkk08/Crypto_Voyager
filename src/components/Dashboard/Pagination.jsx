import React, { useState } from "react";

import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({ page, handlePageChange }) {
  return (
    <div className="flex m-3 items-center justify-center mt-10 mb-10">
      <Pagination
        sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid #e5e5e5",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "#fca311",
            borderColor: "#fca311",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={25}
        page={page}
        onChange={(event, value) => handlePageChange(event, value)}
      />
    </div>
  );
}