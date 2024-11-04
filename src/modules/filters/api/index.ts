import { BaseConnection, BaseRequestHeaders } from "../../core/axios";

export const fetchCategories = async () => {
  return await BaseConnection.get(`/categories`, {
    headers: {
      ...BaseRequestHeaders,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
