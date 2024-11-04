import axios from "axios";

export const BaseRequestHeaders = {
  "Content-type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const BaseConnection = axios.create({
  baseURL: "https://shop-api.fly.dev/api/v1",
  headers: BaseRequestHeaders,
});
