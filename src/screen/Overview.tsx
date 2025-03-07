import { Box, FormControl, MenuItem, Select } from "@mui/material";
import Header from "../components/Header";
import { useState } from "react";
import Overviewchart from "../components/Overviewchart";

export default function Overview() {
  const [view, setview] = useState<string>("unit");
  return (
    <Box>
      <Header title="overview" subtitle="this is overview section"></Header>
      <Box sx={{ marginY: "20px" }}>
        <FormControl
          sx={{
            marginTop: "10px",
            width: 150,
          }}
        >
          <Select
            sx={{
              color: "white",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
            value={view}
            onChange={(e) => setview(e.target.value)}
          >
            <MenuItem value="sales">sales</MenuItem>
            <MenuItem value="unit">unit</MenuItem>
          </Select>
        </FormControl>
        <Overviewchart dashboard={false} view={view}></Overviewchart>
      </Box>
    </Box>
  );
}
