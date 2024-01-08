import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { routes } from "../apiRoutes";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => routes.products.allProducts(),
    }),
    getProduct: builder.query({
      query: (product) => routes.products.searchProducts(product),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
