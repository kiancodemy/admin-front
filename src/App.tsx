import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { Box } from "@mui/material";
import Products from "./screen/Products";
import Admin from "./screen/Admin";
import Dashboard from "./screen/Dashboard";
import Cuatomers from "./screen/Cuatomers";
import Overview from "./screen/Overview";
import Transactions from "./screen/Transactions";
export default function App() {
  return (
    <Box sx={{ backgroundColor: "#102C57", minHeight: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<Navigate to="/Dashboard" replace={true} />}
            ></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/Products" element={<Products></Products>}></Route>
            <Route path="/Customers" element={<Cuatomers></Cuatomers>}></Route>
            <Route
              path="/Transactions"
              element={<Transactions></Transactions>}
            ></Route>
            <Route path="/Overview" element={<Overview></Overview>}></Route>
            <Route path="/Admin" element={<Admin></Admin>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
