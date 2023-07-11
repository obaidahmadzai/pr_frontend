"use client";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import moment from "moment";
import { useState } from "react";
import TextField from "@mui/material/TextField";

import { useApi } from "@/services/useApi";

export default function dataGridTest({
  columns,
  data,
  searchItem,
}: {
  columns: any;
  data: any;
  searchItem: (e: any) => void;
}) {
  const [pageSize, SetPageSize] = useState(1);

  return (
    <Box sx={{ width: "100%" }}>
      <Link
        href="/vehicles/add"
        style={{
          fontWeight: "bold",
          color: "black",
          textDecoration: "none",
        }}
      >
        <Box
          component="span"
          sx={{
            p: 2,
            border: "1px dashed grey",
            marginBottom: 2,
            display: "inline-block",
          }}
        >
          Add New
        </Box>
      </Link>
      <TextField fullWidth label="Search" onChange={(e) => searchItem(e)} />
      <DataGrid
        autoHeight
        rows={data}
        columns={columns}
        getRowId={(row) => row?.id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize: any) => SetPageSize(newPageSize)}
      />
    </Box>
  );
}
