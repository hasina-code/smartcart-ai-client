import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./useProducts";

const useMyProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["my-products"],

    queryFn: async () => {
      const { data } = await axiosInstance.get("/products/my-products");

      return data.data;
    },
  });
};

export default useMyProducts;