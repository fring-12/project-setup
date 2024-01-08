export const routes = {
  products: {
    allProducts: () => `/product`,
    searchProducts: (product) => `/product/search?q=${product}`,
  },
};
