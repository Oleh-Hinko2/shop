import { create } from "zustand";
import { fetchProducts } from "../api";
import { OrderProduct, Product } from "../models";

type ProductsStore = {
  products: Product[];
  loading: boolean;
  fetchProductsSync: (selectedCategoryId?: string) => Promise<void>;
};

type SelectedProductStore = {
  selectedProduct: OrderProduct | null;
  setSelectedProduct: (product: OrderProduct) => void;
  clearSelectedProduct: () => void;
};

export const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  loading: false,
  fetchProductsSync: async (selectedCategoryId) => {
    set(() => ({ loading: true }));
    const { data } = await fetchProducts(selectedCategoryId);
    set(() => ({ products: data.data }));
    set(() => ({ loading: false }));
  },
}));

export const useSelectedProductStore = create<SelectedProductStore>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product: OrderProduct) => {
    set(() => ({ selectedProduct: product }));
  },
  clearSelectedProduct: () => {
    set(() => ({ selectedProduct: null }));
  },
}));
