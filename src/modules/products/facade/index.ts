import { useCallback, useEffect } from "react";
import { useDialog } from "../../core/hooks";
import { OrderProduct } from "../models";
import { useProductsStore, useSelectedProductStore } from "../store";

export const useProductsFacade = () => {
  const { open, onToggle } = useDialog();

  const loading = useProductsStore((state) => state.loading);
  const products = useProductsStore((state) => state.products);
  const selectedProduct = useSelectedProductStore(
    (state) => state.selectedProduct
  );
  const setSelectedProduct = useSelectedProductStore(
    (state) => state.setSelectedProduct
  );
  const clearSelectedProduct = useSelectedProductStore(
    (state) => state.clearSelectedProduct
  );

  const fetchProductsSync = useProductsStore(
    (state) => state.fetchProductsSync
  );

  useEffect(() => {
    if (!products.length && !loading) {
      fetchProductsSync();
    }
  }, [products, loading]);

  const handleAddProductToCard = useCallback((product: OrderProduct) => {
    setSelectedProduct(product);
    onToggle();
  }, []);

  const handleClearProductToCard = useCallback(() => {
    onToggle();
    clearSelectedProduct();
  }, [open]);

  return {
    loading,
    products,
    selectedProduct,
    clearSelectedProduct,
    setSelectedProduct,

    openAddProductModal: open,
    onToggleAddProductModal: onToggle,
    onAddProductToCard: handleAddProductToCard,
    onClearProductToCard: handleClearProductToCard,
  };
};
