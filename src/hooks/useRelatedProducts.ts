import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./useProducts";

const useRelatedProducts = (id: string) => {
  return useQuery<Product[]>({
    queryKey: ["related-products", id],

    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/products/${id}/related`
      );

      return data.data;
    },

    enabled: !!id,
  });
};

export default useRelatedProducts;