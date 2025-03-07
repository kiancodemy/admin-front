import { useGetcustomersQuery } from "../slices/userapi";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { Box } from "@mui/material";
import Header from "../components/Header";
//set columns//
const columns: GridColDef[] = [
  { field: "_id", headerName: "_id", width: 250 },
  { field: "name", headerName: "name", width: 130 },
  { field: "email", headerName: " email", width: 250 },
  { field: "country", headerName: "country", width: 150 },
  { field: "occupation", headerName: " occupation", width: 150 },
  { field: "phoneNumber", headerName: "phoneNumber", width: 160 },
  { field: "role", headerName: " role", width: 100, flex: 1 },
];

export default function Cuatomers() {
  //get customers//
  const { data: info, isLoading } = useGetcustomersQuery("");

  return (
    <Box sx={{ paddingY: "20px" }}>
      <Header title="customers" subtitle="list of customers"></Header>

      <Box
        sx={{
          overflowX: "auto",

          height: "80vh",

          width: "100%",
        }}
      >
        <DataGrid
          sx={{
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#102C57",
              color: "white",
            },
            "& .MuiDataGrid-row , & .Mui-selected": {
              border: "none",
              backgroundColor: "#284168",
            },
            "& .MuiDataGrid-cell ": {
              border: "none",
            },
            "& .MuiToolbar-root": {
              color: "white",
              border: "none",
            },
            "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {},
            color: "white",

            maxWidth: "95%",
            marginX: "auto",
          }}
          getRowId={(row: any) => row._id}
          rows={info || []}
          loading={isLoading}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
