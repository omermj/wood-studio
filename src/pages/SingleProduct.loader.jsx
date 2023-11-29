import { customFetch } from "../utils/index.jsx";

export const singleProductLoader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};
