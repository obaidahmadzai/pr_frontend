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
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useApi } from "@/services/useApi";
import { TableFooter, TablePagination } from "@mui/material";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}
export default function DataTable(data: any, columns: any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(1);
  const [values, setValues] = React.useState([...data]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  }

  const { All, Delete, Get } = useApi({ api: "vehicle" });
  //   const { data, error, isLoading } = All();

  //   if (isLoading) return "loading...";
  //   if (error) return "Error...";
  const deleteItem = (id: number) => {
    Delete(id);
  };
  const searchItem = (e: any) => {
    const { data, error, isLoading } = Get(e.target.value);
    useEffect;
  };
  return (
    <>
      <Link
        href="/vehicles/add"
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
      <Box
        sx={{
          color: "red",
          mt: 5,
        }}
      >
        <Paper elevation={0}>
          <TextField fullWidth label="Search" onChange={(e) => searchItem(e)} />
          <TableContainer sx={{ mt: 5 }}>
            <Table
              sx={{ minWidth: 650 }}
              stickyHeader
              aria-label="simple table"
            >
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
                {values.map((row: any) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.make}</TableCell>
                    <TableCell align="left">{row.model}</TableCell>
                    <TableCell align="left">{row.year}</TableCell>
                    <TableCell align="left">{row.color}</TableCell>
                    <TableCell align="left">{row.registrationNumber}</TableCell>
                    <TableCell align="left">{row.container?.code}</TableCell>
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
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
}
