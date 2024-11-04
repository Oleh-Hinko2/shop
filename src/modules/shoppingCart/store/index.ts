import { create } from "zustand";
import { OrderProduct } from "../../products";
import { createOrder } from "../api";

type Message = {
  text: string;
  severity: "success" | "error";
};

type ShoppingCartStore = {
  shoppingCart: {
    products: OrderProduct[];
  };
  message: Message | null;
  addProduct: (product: OrderProduct) => void;
  removeProduct: (productId: string) => void;
  createOrderAsync: (orderProducts: OrderProduct[]) => Promise<void>;
  clearMessage: () => void;
};

export const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
  shoppingCart: {
    products: [],
  },
  message: null,
  addProduct: (product: OrderProduct) => {
    set((state) => {
      const isAlreadyHave = state.shoppingCart.products.find(
        (productItem) => productItem.productId === product.productId
      );

      if (isAlreadyHave) {
        return { shoppingCart: state.shoppingCart };
      }

      return {
        shoppingCart: { products: [...state.shoppingCart.products, product] },
      };
    });
  },
  removeProduct: (productId: string) => {
    set((state) => {
      const updatedProductList = state.shoppingCart.products.filter(
        (productItem) => productItem.productId !== productId
      );

      return {
        shoppingCart: { products: updatedProductList },
      };
    });
  },
  createOrderAsync: async (orderProducts: OrderProduct[]) => {
    try {
      await createOrder(orderProducts);

      set(() => ({
        message: {
          text: "You have successfully created an order",
          severity: "success",
        },
      }));
      set(() => ({
        shoppingCart: {
          products: [],
        },
      }));
    } catch (error) {
      set({
        message: {
          text: "There were problems creating the order",
          severity: "error",
        },
      });
    }
  },
  clearMessage: () => {
    set(() => ({ message: null }));
  },
}));
