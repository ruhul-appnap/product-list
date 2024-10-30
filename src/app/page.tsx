import { Suspense } from "react";
import ProductSkeleton from "@/components/ProductSkeleton";
import ProductCard from "@/components/ProductCard";
import { productService } from "@/services/product";

export default async function ProductsPage() {
  const { products } = await productService.getAllProducts();

  return (
    <div className="py-8">
      <Suspense fallback={<ProductSkeleton />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
