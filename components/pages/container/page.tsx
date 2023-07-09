"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box/Box";
import Link from "next/link";
import { useApi } from "@/services/useApi";
interface container {
  id: number;
  code: string;
}
[];

export default function ContainersPage() {
  const { All, Delete } = useApi({ api: "container" });
  const { data, error, isLoading } = All();

  if (isLoading) return "loading...";
  if (error) return "Error...";
  const deleteItem = (id: number) => {
    Delete(id);
  };
  return (
    <>
      <Link
        href="/containers/add"
        style={{
          fontWeight: "bold",
          color: "black",
          textDecoration: "none",
        }}
      >
        <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
          Add New
        </Box>
      </Link>
      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Code
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: container) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.code}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Link href={`containers/edit/${row.id}`}>
                      <EditIcon sx={{ color: "black" }} />
                    </Link>
                    <DeleteIcon onClick={() => deleteItem(row.id)} />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
