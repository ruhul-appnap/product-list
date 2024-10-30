"use client";

import { createContext, useEffect, useState } from "react";

interface CartItem {
  id: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  getItemQuantity: (productId: number) => number;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getItemQuantity: () => 0,
});

function getInitialCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Failed to parse cart data:", error);
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setCartItems(getInitialCart());
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem("cart", JSON.stringify(cartItems));
      } catch (error) {
        console.error("Failed to save cart data:", error);
      }
    }
  }, [cartItems, isInitialized]);

  const addToCart = (productId: number) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === productId);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { id: productId, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === productId);

      if (existingItem?.quantity === 1) {
        return currentItems.filter((item) => item.id !== productId);
      }

      return currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const getItemQuantity = (productId: number) => {
    return cartItems.find((item) => item.id === productId)?.quantity || 0;
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
