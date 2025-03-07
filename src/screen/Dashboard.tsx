import Overviewchart from "../components/Overviewchart";
import Cuatomers from "./Cuatomers";
import { Box, Typography, Grid } from "@mui/material";
import { useGetsalesQuery } from "../slices/userapi";
import Header from "../components/Header";
import { DownloadOutlined, PointOfSale, PersonAdd } from "@mui/icons-material";

export default function Dashboard() {
  const { data, isLoading } = useGetsalesQuery("");
  const { totalCustomers, yearlySalesTotal, yearlyTotalSoldUnits } = data || [];
  return (
    <Box>
      <Header title="dashboard" subtitle="it is dashboard section"></Header>
      {isLoading ? (
        <Box sx={{ paddingY: "20px" }}>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              textAlign: "center",

              textTransform: "capitalize",
            }}
          >
            loading......
          </Typography>
        </Box>
      ) : (
        <Box sx={{ marginTop: "20px", paddingX: "10px" }}>
          <Grid container>
            <Grid
              sx={{ alignSelf: "start" }}
              container
              item
              xs={12}
              gap={2}
              md={5}
            >
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  textTransform: "capitalize",
                  color: "white",
                  backgroundColor: "#284168",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>total Customers</Typography>
                  <PersonAdd></PersonAdd>
                </Box>
                <Typography sx={{ color: "#FFC700", fontWeight: "bold" }}>
                  {totalCustomers}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  textTransform: "capitalize",
                  color: "white",
                  backgroundColor: "#284168",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>yearly SalesTotal</Typography>
                  <DownloadOutlined></DownloadOutlined>
                </Box>
                <Typography sx={{ color: "#FFC700", fontWeight: "bold" }}>
                  ${yearlySalesTotal}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  textTransform: "capitalize",
                  color: "white",
                  backgroundColor: "#284168",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>yearly TotalSold Units</Typography>
                  <PointOfSale></PointOfSale>
                </Box>
                <Typography sx={{ color: "#FFC700", fontWeight: "bold" }}>
                  ${yearlyTotalSoldUnits}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Overviewchart dashboard={true} view="sales"></Overviewchart>
            </Grid>
          </Grid>
          <Cuatomers></Cuatomers>
        </Box>
      )}
    </Box>
  );
}
