"use client";
import React from "react";
import { useGetAllProductsQuery } from "../redux/apiSlices/productApiSlice";

const Home = () => {
  const {
    data: allProductsData,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery(null);

  console.log("allProductsData", allProductsData);

  return <div>home</div>;
};

export default Home;
