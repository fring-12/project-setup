import React from "react";
import { motion } from "framer-motion";
import { useGetAllProductsQuery } from "redux/apiSlices/productApiSlice";
import Home from "components/home";

const page = () => {
  return <Home />;
};

export default page;
