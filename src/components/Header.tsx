import { Box, Typography } from "@mui/material";

type name = {
  title: string;
  subtitle: string;
};
export default function Header({ title, subtitle }: name) {
  return (
    <Box
      sx={{
        backgroundColor: "#102C57",
        color: "white",
        display: "flex",
        gap: "5px",
        paddingX: "20px",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "25px", lg: "30px" },
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: "15px", textTransform: "capitalize" }}>
        {subtitle}
      </Typography>
    </Box>
  );
}
