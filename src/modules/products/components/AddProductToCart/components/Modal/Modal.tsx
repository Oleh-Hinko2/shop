import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useState, ChangeEvent } from "react";
import { OrderProduct } from "../../../../models";
import { useShoppingCartStore } from "../../../../../shoppingCart";

type AddProductToCartModalProps = {
  open: boolean;
  onClose: () => void;
  selectedProduct: OrderProduct;
  onClearProductToCard: () => void;
};

const AddProductToCartModal = ({
  open,
  onClose,
  selectedProduct,
  onClearProductToCard,
}: AddProductToCartModalProps) => {
  const addProduct = useShoppingCartStore((state) => state.addProduct);

  const [qty, setQty] = useState<number>(selectedProduct.minAmount);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleQtyValidation = (value: number) => {
    if (value < selectedProduct.minAmount) {
      setErrorMessage(
        `Quantity can't be less that ${selectedProduct.minAmount}`
      );

      return;
    }

    if (value > selectedProduct.maxAmount) {
      setErrorMessage(
        `Quantity can't be more that ${selectedProduct.maxAmount}`
      );

      return;
    }

    setErrorMessage("");
  };

  const handleChangeQty = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    setQty(value);
    handleQtyValidation(value);
  };

  const handleAddProductToCard = () => {
    addProduct({
      ...selectedProduct,
      qty,
    });
    onClose();
  };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{ "& .MuiPaper-root": { width: "500px" } }}
    >
      <DialogTitle>Add {selectedProduct?.name} to card</DialogTitle>

      <DialogContent>
        <Typography variant="body1">
          Please choose quantity of product
        </Typography>
        <TextField
          type="number"
          value={qty}
          onChange={handleChangeQty}
          sx={{ width: "100%", marginBottom: "8px" }}
        />
        {errorMessage && (
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button
          color="primary"
          variant="outlined"
          onClick={onClearProductToCard}
        >
          Cancel
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          disabled={!!errorMessage}
          onClick={handleAddProductToCard}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProductToCartModal;
