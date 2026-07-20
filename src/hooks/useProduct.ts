import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./useProducts";

const useProduct = (id: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],

    queryFn: async () => {
      const { data } = await axiosInstance.get(`/products/${id}`);
      return data.data;
    },

    enabled: !!id,
  });
};

export default useProduct;