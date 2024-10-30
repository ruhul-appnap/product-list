import { type ProductsResponse } from "@/types/product";

const BASE_URL = "https://dummyjson.com";

export const productService = {
  async getAllProducts(options?: { limit?: number; skip?: number }) {
    const queryParams = new URLSearchParams();
    if (options?.limit) queryParams.append("limit", options.limit.toString());
    if (options?.skip) queryParams.append("skip", options.skip.toString());

    const res = await fetch(`${BASE_URL}/products?${queryParams.toString()}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json() as Promise<ProductsResponse>;
  },
};
