import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDialog } from "../core/hooks";
import { ShoppingCartModal } from "./components/Modal";
import { useShoppingCartStore } from "./store";
import { ShoppingCartList } from "./components/List";

const ShoppingCart = () => {
  const { open, onToggle } = useDialog();

  const orderProducts = useShoppingCartStore(
    (state) => state.shoppingCart.products
  );

  const message = useShoppingCartStore((state) => state.message);
  const clearMessage = useShoppingCartStore((state) => state.clearMessage);

  return (
    <>
      <IconButton onClick={onToggle}>
        <Badge badgeContent={orderProducts.length} color="primary">
          <ShoppingCartIcon fontSize="large" color="primary" />
        </Badge>
      </IconButton>
      <ShoppingCartModal
        open={open}
        onClose={onToggle}
        orderProducts={orderProducts}
      >
        <ShoppingCartList orderProducts={orderProducts} />
      </ShoppingCartModal>

      <Snackbar open={!!message} autoHideDuration={6000} onClose={clearMessage}>
        <Alert
          onClose={clearMessage}
          severity={message?.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message?.text}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ShoppingCart;
