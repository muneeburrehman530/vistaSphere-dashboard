import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { randomTraderName, randomEmail } from "@mui/x-data-grid-generator";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";
const columns = [
  { field: "id", headerName: "ID", width: 30 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "email", headerName: "Email", width: 300 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "age", headerName: "Age", type: "number", width: 100 },
];

const rows = [];
const randomStatus = () => {
  const statuses = ["Pending", "Completed"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

for (let i = 1; i <= 100; i++) {
  rows.push({
    id: i,
    name: randomTraderName(),
    email: randomEmail(),
    age: Math.floor(Math.random() * 40) + 18,
    status: randomStatus(),
  });
}

const DataTable = () => {
  const [filterModel, setFilterModel] = useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [""],
  });

  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});

  return (
    <Box sx={{ width: 1 }}>
      <FormControlLabel
        checked={columnVisibilityModel.id !== false}
        onChange={(event) =>
          setColumnVisibilityModel(() => ({ id: event.target.checked }))
        }
        control={<Switch color="secondary" size="large" />}
        label="Show ID column"
      />
      <FormControlLabel
        checked={filterModel.quickFilterExcludeHiddenColumns}
        onChange={(event) =>
          setFilterModel((model) => ({
            ...model,
            quickFilterExcludeHiddenColumns: event.target.checked,
          }))
        }
        control={<Switch color="secondary" size="small" />}
        label="Exclude hidden columns"
      />
      <Box sx={{ height: "70vh" }}>
        <DataGrid
          columns={columns}
          rows={rows}
          disableColumnFilter
          disableDensitySelector
          slots={{ toolbar: GridToolbar }}
          filterModel={filterModel}
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
          sx={{
            "& .MuiDataGrid-columnHeader": {
              fontSize: "1.5rem", // Increase header font size
            },
            "& .MuiDataGrid-cell": {
              fontSize: "1.5rem", // Increase cell font size
            },
            "& .MuiDataGrid-toolbarContainer": {
              padding: "1rem", // Increase toolbar padding
            },
            "& .MuiDataGrid-root": {
              fontSize: "1.5rem", // Increase overall table font size
            },
            // Add more styling for other elements as needed
          }}
        />
      </Box>
    </Box>
  );
};

export default DataTable;
