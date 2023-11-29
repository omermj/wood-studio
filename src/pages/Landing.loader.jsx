import { customFetch } from "../utils/index.jsx";

const url = "/products?featured=true";

export const landingLoader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};
