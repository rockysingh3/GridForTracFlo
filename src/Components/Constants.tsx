import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Typography } from "@mui/material";


export const columns: GridColDef[] = [
  {
    field: "project",
    headerName: "Project",
    headerAlign: "center",
    width: 130,
    renderCell: (params) => (
      <div>
        <Typography color="#40C4FF">
              {params.value}
        </Typography>
      </div>
    )
  },
  {
    field: "client",
    headerName: "Name & Client",
    headerAlign: "center",
    width: 250,
    renderCell: (params) => (
      <div>
        <Typography color="#40C4FF" >
              {params.value}
        </Typography>
      </div>
    )
  },
  { field: "paid", headerName: "PAID", headerAlign: "center", width: 130 },
  {
    field: "balance",
    headerName: "Balance",
    headerAlign: "center",
    width: 130,
  },
  { field: "tix", headerName: "TIX", headerAlign: "center", width: 130 },
  { field: "cos", headerName: "COs", headerAlign: "center", width: 130 },
  { field: "start", headerName: "Start", headerAlign: "center", width: 160 },
];

/* method for which updates the rows */
export const rows: GridRowsProp = [
  {
    id: 1,
    project: "77",
    client: "The Building of Tom...",
    paid: "600",
    balance: "$00.00",
    tix: "000",
    cos: "000",
    start: "2021-06-22",
  },
  {
    id: 2,
    project: "13",
    client: "Test Project - 550 w...",
    paid: "600",
    balance: "$00.00",
    tix: "000",
    cos: "000",
    start: "2021-02-02",
  },
  {
    id: 3,
    project: "4",
    client: "450 Lincoln Ave",
    paid: "600",
    balance: "$00.00",
    tix: "000",
    cos: "000",
    start: "2021-08-10",
  },
];
