import { BaseConnection } from "../../core/axios";

export const fetchProducts = async (selectedCategoryId?: string) => {
  return await BaseConnection.get(
    `/products?categoryId=${selectedCategoryId ?? ""}`
  );
};
