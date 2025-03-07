import React from "react";
import profile from "../assets/profile.jpeg";

import {
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Avatar,
} from "@mui/material";

export default function Navbar({
  setopen,
  data,
}: {
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
}) {
  return (
    <AppBar sx={{ position: "static", backgroundColor: "#102C57" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/*left--side*/}
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box
            sx={{
              backgroundColor: "#284168",
              padding: "0px 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              textTransform: "capitalize",
            }}
          >
            <IconButton
              sx={{ color: "white" }}
              onClick={() => {
                setopen((prev) => !prev);
              }}
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <InputBase
              sx={{ color: "white" }}
              placeholder="search..."
            ></InputBase>
            <IconButton sx={{ color: "white" }}>
              <Search></Search>
            </IconButton>
          </Box>
        </Box>
        {/*right--side*/}
        <Box sx={{ display: "flex" }}>
          <IconButton sx={{ color: "white" }}>
            <SettingsOutlined sx={{ fontSize: "20px" }}></SettingsOutlined>
          </IconButton>
          <Box
            sx={{
              backgroundColor: "#102C57",
              display: "flex",
              paddingY: "30px",
              paddingX: "20px",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Avatar
              sx={{ objectFit: "cover", height: 30, width: 30 }}
              alt="Remy Sharp"
              src={profile}
            ></Avatar>
            <Box
              sx={{
                display: "flex",
                color: "white",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                {data.name}
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                {data.occupation}
              </Typography>
            </Box>
            <ArrowDropDownOutlined></ArrowDropDownOutlined>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
