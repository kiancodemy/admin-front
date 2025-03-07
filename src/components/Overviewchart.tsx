
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,

  Tooltip,
} from "recharts";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useGetsalesQuery } from "../slices/userapi";
import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
type chart = { view: string; dashboard: Boolean };
export default function Overviewchart({ view, dashboard = false }: chart) {
  const { data, isLoading } = useGetsalesQuery("");

  const [data1, data2] = useMemo(() => {
    if (isLoading) {
      return "loading";
    }

    const { monthlyData } = data;
    let data1: any = [];

    let data2: any = [];

    Object.values(monthlyData).reduce(
      (acc: any, { month, totalSales, totalUnits }: any) => {
        const curSales = acc.sales + totalSales;
        const curUnits = acc.units + totalUnits;

        data1 = [...data1, { x: month, y: curSales }];
        data2 = [...data2, { x: month, y: curUnits }];

        return { sales: curSales, units: curUnits };
      },
      { sales: 0, units: 0 }
    );

    return [data1, data2];
  }, [data, isLoading]);

  const matches = useMediaQuery("(min-width:780px)");

  return (
    <Box sx={{ marginTop: "10px" }}>
      {isLoading ? (
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              textAlign: "center",
              marginTop: "20px",
              textTransform: "capitalize",
            }}
          >
            loading......
          </Typography>
        </Box>
      ) : (
        <LineChart
          margin={{ left: 20, top: 25, bottom: 20 }}
          data={view === "sales" ? data1 : data2}
          height={400}
          width={matches && dashboard ? 700 : matches ? 1100 : 330}
        >
          <Line type="monotone" dataKey="y" stroke="#fff" />
          <CartesianGrid stroke="#fff" />
          <XAxis stroke="#fff" dataKey="x" />
          <YAxis stroke="#fff" />
          <Tooltip />
        </LineChart>
      )}
    </Box>
  );
}
