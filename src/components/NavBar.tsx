"use client";

import { ShoppingCartIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";

function NavBar() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.length;

  return (
    <nav className="flex items-center justify-between bg-primary p-4 rounded text-white mb-8 sticky top-0 z-50 mt-2">
      <Link href="/">
        <HomeIcon className="w-7 h-7" />
      </Link>

      <div className="relative cursor-pointer">
        <ShoppingCartIcon className="w-7 h-7" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-6 w-6 flex items-center justify-center rounded-full">
          {totalQuantity}
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
