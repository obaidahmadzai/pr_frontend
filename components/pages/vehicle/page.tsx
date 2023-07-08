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
import Link from "next/link";
import { useApi } from "@/services/useApi";
interface vehicle {
  id: number;
  make: string;
  model: string;
  year: string;
  color: string;
  registrationNumber: string;
  container: {
    code: string;
  };
}
[];

export default function VehiclesPage() {
  const { All, Delete } = useApi({ api: "vehicle" });
  const { data, error, isLoading } = All();

  if (isLoading) return "loading...";
  if (error) return "Error...";
  const deleteItem = (id: number) => {
    Delete(id);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Make
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Model
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Year
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Color
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Registration Number
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Container
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: vehicle) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.make}</TableCell>
                <TableCell align="left">{row.model}</TableCell>
                <TableCell align="left">{row.year}</TableCell>
                <TableCell align="left">{row.color}</TableCell>
                <TableCell align="left">{row.registrationNumber}</TableCell>
                <TableCell align="left">{row.container.code}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Link href={`vehicles/edit/${row.id}`}>
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
