"use client";

import { Heart, Eye, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { TgaTailIcon } from "./icons";
import { type Product } from "@/types/product";

function ProductCard({ product }: { product: Product }) {
  const { addToCart, removeFromCart, getItemQuantity, decreaseQuantity } =
    useCart();
  const quantity = getItemQuantity(product.id);
  const discountAmount = Math.round(
    product.price * (product.discountPercentage / 100)
  );
  const priceWithDiscount = (product.price + discountAmount).toFixed(2);

  return (
    <div className="relative group bg-white rounded-lg hover:shadow-md transition-shadow px-1">
      <div className="absolute top-2 left-[-3px] z-10 text-sm flex items-center shadow-sm rounded-l-md">
        <div className="bg-tag text-white px-4 py-[2px]">
          -৳ {discountAmount}
        </div>
        <TgaTailIcon />
      </div>

      <button className="absolute top-2 right-2 z-10 p-2 transition-colors hidden group-hover:block">
        <Heart className="w-7 h-7 text-white" />
      </button>

      <div className="relative w-full aspect-square">
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="object-cover rounded-lg"
          fill
        />
        <div className="absolute inset-0 bg-black/30 md:bg-black/10 rounded-lg group-hover:bg-black/30 transition-colors"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity opacity-100 md:opacity-0 group-hover:opacity-100">
          <div className="relative w-[90%]">
            {quantity === 0 ? (
              <button
                onClick={() => addToCart(product.id)}
                className="w-full py-2 px-4 rounded-md transition-all text-white flex items-center justify-center gap-2 border-[1px] bg-muted/70 backdrop-blur-md"
              >
                <ShoppingCart className="w-6 h-6" /> <span>Add to Cart</span>
              </button>
            ) : (
              <div className="flex items-center justify-between gap-2 text-white rounded-md p-2 bg-[#03A629]">
                <button onClick={() => removeFromCart(product.id)}>
                  <Trash2 className="w-6 h-6" />
                </button>
                <button onClick={() => decreaseQuantity(product.id)}>
                  <Minus className="w-6 h-6" />
                </button>
                <span className="font-semibold">{quantity} Added in Cart</span>
                <button onClick={() => addToCart(product.id)}>
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
          <button className="relative w-[90%] py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2 border-[1px] bg-muted/70 backdrop-blur-md text-white">
            <Eye className="w-6 h-6" />
            Quick View
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-[#5A6573]">{product.brand}</p>
        <h3 className="text-lg font-semibold line-clamp-2 mb-2">
          {product.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-[#1882FF]">
            ৳ {product.price}
          </span>
          <span className="text-lg text-[#77818C] line-through">
            ৳ {priceWithDiscount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
