import { useGetproductsQuery } from "../slices/userapi";

import { items } from "../components/Item";
import Item from "../components/Item";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";

export default function Products() {
  ///query function
  const { data, isLoading } = useGetproductsQuery("");

  ///all of products

  return (
    <Box>
      <Header title="products" subtitle="this is the list of products"></Header>
      {data && !isLoading ? (
        <Box
          sx={{
            paddingY: "20px",
            columnGap: "10px",

            display: "grid",

            gridTemplateColumns: {
              xs: "repeat(1,100%)",
              sm: "repeat(2,1fr)",
              md: "repeat(4,1fr)",
            },
            rowGap: "10px",
            paddingX: "10px",
            backgroundColor: "#102C57",
            justifyContent: "space-between",

            color: "white",
          }}
        >
          {data.map(
            ({
              _id,
              name,
              price,
              description,
              category,
              rating,
              supply,

              state,
            }: items) => {
              return (
                <Item
                  _id={_id}
                  name={name}
                  price={price}
                  description={description}
                  category={category}
                  rating={rating}
                  supply={supply}
                  state={state}
                ></Item>
              );
            }
          )}
        </Box>
      ) : (
        <Typography
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            fontSize: "30px",
            color: "white",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          it is loading .....
        </Typography>
      )}
    </Box>
  );
}
