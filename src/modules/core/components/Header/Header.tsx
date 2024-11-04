import * as S from "./Header.styled";
import Box from "@mui/material/Box";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { ShoppingCart } from "../../../shoppingCart";
import { Theme } from "../Theme";

const Header = () => {
  return (
    <S.Wrapper sx={{ boxShadow: 2 }}>
      <Box display="flex" alignItems="center" gap={2}>
        <LocalShippingIcon fontSize="large" color="primary" />
        <S.Title variant="h5">Shop</S.Title>
      </Box>
      <Box gap={2} display="flex" alignItems="center">
        <Theme />
        <ShoppingCart />
      </Box>
    </S.Wrapper>
  );
};

export default Header;
