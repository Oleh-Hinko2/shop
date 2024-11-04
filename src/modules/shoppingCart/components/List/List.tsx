import { OrderProduct } from "../../../products";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { useShoppingCartStore } from "../../store";

type ShoppingCartList = {
  orderProducts: OrderProduct[];
};

const ShoppingCartList = ({ orderProducts }: ShoppingCartList) => {
  const removeProduct = useShoppingCartStore((state) => state.removeProduct);

  return (
    <>
      <List sx={{ width: "100%" }}>
        {orderProducts.map((product) => (
          <ListItem
            key={product.productId}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <Box display="flex" alignItems="center">
              <ListItemAvatar>
                <Avatar
                  alt={product.name}
                  src={`${process.env.PUBLIC_URL}/images/${product.image}`}
                />
              </ListItemAvatar>
              <ListItemText primary={product.name} />
            </Box>
            <Box display="flex" gap={2} alignItems="center">
              <Box display="flex" flexDirection="column">
                <Typography variant="body1">Quantity: {product.qty}</Typography>
                <Typography variant="body1">
                  Price: {product.price} ₴
                </Typography>
              </Box>
              <Box>
                <IconButton
                  onClick={() => removeProduct(product.productId)}
                  size="small"
                >
                  <CloseIcon color="error" />
                </IconButton>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ShoppingCartList;
