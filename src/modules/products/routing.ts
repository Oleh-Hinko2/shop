import { RouteObject } from "react-router-dom";
import { ProductIndexRoute } from "./routers/ProductIndexRoute";

export const routes: RouteObject[] = [
  {
    id: "0",
    path: "/",
    Component: ProductIndexRoute,
  },
];
