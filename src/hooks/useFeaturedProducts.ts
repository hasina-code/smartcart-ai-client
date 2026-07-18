
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

const useFeaturedProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["featured-products"],
    queryFn: async (): Promise<Product[]> => {
      const { data } = await axiosInstance.get("/products/featured");

      return data.data;
    },
  });
};

export default useFeaturedProducts;