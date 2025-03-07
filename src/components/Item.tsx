export type items = {
  _id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  rating: number;
  supply: Number;

  state: any;
};

import { Rating, Typography, Box } from "@mui/material";

export default function Item({
  _id,
  name,
  price,
  description,
  category,
  rating,
}: items) {
  return (
    <Box
      key={_id}
      sx={{
        backgroundColor: "#284168",
        borderRadius: "5px",
        padding: "10px",

        display: "flex",

        flexDirection: "column",

        gap: "4px",
      }}
    >
      <Typography>{category}</Typography>
      <Typography>{name}</Typography>
      <Typography>
        <span>${price}</span>
      </Typography>

      <Rating sx={{ marginY: "15px" }} value={rating} readOnly></Rating>
      <Typography sx={{ fontSize: "14px" }}>{description}</Typography>
    </Box>
  );
}
