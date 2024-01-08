import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../apiSlices/productApiSlice";

interface Props {
  products: any;
}

const initialState: Props = {
  products: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getAllProducts.matchFulfilled,
      (state, action) => {
        console.log("ASD", action.payload);

        state.products = action.payload;
      }
    );
  },
});

export default productSlice.reducer;
