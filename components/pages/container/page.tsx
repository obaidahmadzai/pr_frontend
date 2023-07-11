"use client";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import moment from "moment";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

import { useApi } from "@/services/useApi";

export default function vehiclePage() {
  const { All, Delete, Search } = useApi({ api: "container" });
  const { data, error, isLoading } = All();
  const [pageSize, SetPageSize] = useState(1);
  const [values, setValues] = useState(data ? data : []);

  useEffect(() => {
    setValues(data);
  }, [data]);

  const deleteItem = (id: number) => {
    Delete(id);
  };

  const searchItem = (e: any) => {
    if (e.key == "Enter" && e.target.value != "") {
      const data = Search(e.target.value);
      data.then((data: any) => {
        setValues(data);
      });
      setValues(data);
    }
  };
  const onblur = (e: any) => {
    if (e.target.value == "" && values != data) {
      setValues(data);
    }
  };

  const columns = [
    { field: "code", headerName: "Container Number", width: 200 },
    {
      field: "vehicles",
      headerName: "Vehicle",
      width: 200,
      renderCell: (params: any) => {
        return params.value.map((data: any) => data.make);
      },
    },

    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      renderCell: (params: any) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params: any) => (
        <Stack direction="row" spacing={2}>
          <Link href={`containers/edit/${params.row.id}`}>
            <EditIcon sx={{ color: "black" }} />
          </Link>
          <DeleteIcon onClick={() => deleteItem(params.row.id)} />
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Link
        href="/containers/add"
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
      <TextField
        fullWidth
        label="Search"
        onKeyUp={(e) => searchItem(e)}
        onBlur={(e) => onblur(e)}
      />
      <DataGrid
        autoHeight
        rows={values}
        columns={columns}
        getRowId={(row) => row?.id}
        // rowsPerPageOptions={[5, 10, 20]}
        // // pageSize={pageSize}
        // onPageSizeChange={(newPageSize: any) => SetPageSize(newPageSize)}
      />
    </Box>
  );
}
