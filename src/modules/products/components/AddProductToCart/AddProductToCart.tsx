import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useProductsFacade } from "../../facade";
import { AddProductToCartModal } from "./components/Modal";

type AddProductToCartProps = {
  id: string;
  name: string;
  minAmount: number;
  maxAmount: number;
  price: string;
  image: string;
};

const AddProductToCart = ({
  id,
  name,
  minAmount,
  maxAmount,
  price,
  image,
}: AddProductToCartProps) => {
  const {
    openAddProductModal,
    onToggleAddProductModal,
    onAddProductToCard,
    selectedProduct,
    onClearProductToCard,
  } = useProductsFacade();

  const handleAddProductToCard = () => {
    onAddProductToCard({
      productId: id,
      name,
      qty: minAmount,
      minAmount,
      maxAmount,
      price,
      image,
    });
  };

  return (
    <>
      <IconButton size="medium" onClick={handleAddProductToCard}>
        <AddShoppingCartIcon color="primary" />
      </IconButton>
      {openAddProductModal && selectedProduct && (
        <AddProductToCartModal
          open={openAddProductModal}
          onClose={onToggleAddProductModal}
          onClearProductToCard={onClearProductToCard}
          selectedProduct={selectedProduct}
        />
      )}
    </>
  );
};

export default AddProductToCart;
