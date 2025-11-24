import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types/product.ts";

const API_URL = "https://dummyjson.com/products/";

export function useProduct(productId: string) {
    return useQuery<Product, Error>({
        queryKey: ["product", productId],
        queryFn: async () => {
            const resp = await fetch(`${API_URL}${productId}`);
            if (!resp.ok)
                throw new Error(`Failed to fetch product with id ${productId}.`);
            const res = await resp.json();
            return res as Product;
        }
    });
}