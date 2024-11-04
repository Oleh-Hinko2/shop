export type Product = {
  id: string;
  name: string;
  description: string;
  maxAmount: number;
  minAmount: number;
  available: boolean;
  price: string;
  image: string;
};

export type OrderProduct = {
  productId: string;
  qty: number;
  name: string;
  maxAmount: number;
  minAmount: number;
  price: string;
  image: string;
};
