import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import * as S from "./Product.styled";
import { AddProductToCart } from "../AddProductToCart";

type ProductPropsType = {
  id: string;
  name: string;
  description: string;
  image: string;
  available: boolean;
  price: string;
  minAmount: number;
  maxAmount: number;
};

const Product = ({
  id,
  name,
  description,
  image,
  available,
  price,
  minAmount,
  maxAmount,
}: ProductPropsType) => {
  return (
    <S.Card>
      <CardMedia
        component="img"
        height="194"
        image={`${process.env.PUBLIC_URL}/images/${image}`}
        alt={name}
        sx={{ objectFit: "contain" }}
      />

      <CardContent>
        <Typography variant="h5" component="div" sx={{ height: "70px" }}>
          {name}
        </Typography>
        <S.Description variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </S.Description>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
          height="40px"
        >
          <Typography variant="h5" sx={{ color: "text.primary" }}>
            {price} ₴
          </Typography>
          {available ? (
            <AddProductToCart
              id={id}
              name={name}
              minAmount={minAmount}
              maxAmount={maxAmount}
              price={price}
              image={image}
            />
          ) : (
            <Typography variant="body1" sx={{ color: "text.primary" }}>
              not available
            </Typography>
          )}
        </Box>
      </CardContent>
    </S.Card>
  );
};

export default Product;
