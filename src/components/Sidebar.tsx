import profile from "../assets/profile.jpeg";

export type set = {
  open: any;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Avatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  SettingsOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PointOfSaleOutlined,
  AdminPanelSettingsOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Sidebar({ open, setopen, data }: set) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [active, setactive] = useState<string>("");

  const navItems: any = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      text: "Client Facing",
      icon: null,
    },
    {
      text: "Products",
      icon: <ShoppingCartOutlined />,
    },
    {
      text: "Customers",
      icon: <Groups2Outlined />,
    },
    {
      text: "Transactions",
      icon: <ReceiptLongOutlined />,
    },

    {
      text: "Sales",
      icon: null,
    },
    {
      text: "Overview",
      icon: <PointOfSaleOutlined />,
    },

    {
      text: "Management",
      icon: null,
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlined />,
    },
  ];

  useEffect(() => {
    setactive(pathname.substring(1));
  }, [pathname, open]);

  return (
    <Box
      sx={{
        position: "fixed",

        zIndex: 1,
        right: { xs: "0px" },

        top: "0px",
        left: "0px",
        bottom: "0px",
        width: { md: "250px" },

        display: "flex",
        flexDirection: "column",

        backgroundColor: "#102C57",
        border: "1px solid white",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#102C57",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
            padding: "15px 0px",
            backgroundColor: "#FFC700",
          }}
        >
          Welcome
        </Typography>

        <Divider />
        <List sx={{ backgroundColor: "#102C57", color: "white" }}>
          {navItems.map((text: any) => (
            <ListItem
              sx={{ backgroundColor: active === text.text ? "#FFC700" : "" }}
              key={text}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  setopen(false);
                  text.icon && navigate(`/${text.text}`);
                }}
              >
                {text.icon && (
                  <ListItemIcon sx={{ color: "white" }}>
                    {text.icon}
                  </ListItemIcon>
                )}
                <ListItemText primary={text.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            backgroundColor: "#102C57",
            display: "flex",
            paddingY: "30px",
            paddingX: "20px",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Avatar
            sx={{ objectFit: "cover", height: 40, width: 40 }}
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
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {data.name}
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>{data.occupation}</Typography>
          </Box>
          <IconButton sx={{ color: "white" }}>
            <SettingsOutlined sx={{ fontSize: "20px" }}></SettingsOutlined>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
