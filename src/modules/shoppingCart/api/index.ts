import { BaseConnection, BaseRequestHeaders } from "../../core/axios";
import { OrderProduct } from "../../products";

export const createOrder = async (data: OrderProduct[]) => {
  return await BaseConnection.post(
    `/orders`,
    { data },
    {
      headers: {
        ...BaseRequestHeaders,
      },
    }
  );
};
