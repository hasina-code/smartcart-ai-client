import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface Product {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  brand: string;
  image: string;
  price: number;
  rating: number;
  stock: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

interface ProductsResponse {
  data: Product[];
  pagination: {
    total: number;
    currentPage: number;
    totalPages: number;
  };
}

const useProducts = (
  search: string,
  category: string,
  sort: string,
  page: number
) => {
  return useQuery<ProductsResponse>({
    queryKey: ["products", search, category, sort, page],

    queryFn: async () => {
      const { data } = await axiosInstance.get("/products", {
        params: {
          search,
          category,
          sort,
          page,
          limit: 8,
        },
      });

      return {
        data: data.data,
        pagination: data.pagination,
      };
    },
  });
};

export default useProducts;