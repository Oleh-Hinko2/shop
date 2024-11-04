import { ReactElement } from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { OrderProduct } from "../../../products";
import { useShoppingCartStore } from "../../store";

type ShoppingCartModalProps = {
  open: boolean;
  onClose: () => void;
  children?: ReactElement;
  orderProducts: OrderProduct[];
};

const ShoppingCartModal = ({
  open,
  onClose,
  orderProducts,
  children,
}: ShoppingCartModalProps) => {
  const totalPrice = orderProducts.reduce(
    (acc, product) => acc + Number(product.price) * product.qty,
    0
  );

  const createOrderAsync = useShoppingCartStore(
    (state) => state.createOrderAsync
  );

  const handleCreateOrder = () => {
    createOrderAsync(orderProducts);
    onClose();
  };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{ "& .MuiPaper-root": { width: "500px" } }}
    >
      <DialogTitle>Shopping cart</DialogTitle>
      {children}

      <Box display="flex" justifyContent="space-between" m={2}>
        <Typography variant="h6">Total: {totalPrice} ₴</Typography>
        <Button
          color="primary"
          variant="outlined"
          disabled={!orderProducts.length}
          onClick={handleCreateOrder}
        >
          Buy
        </Button>
      </Box>
    </Dialog>
  );
};

export default ShoppingCartModal;
