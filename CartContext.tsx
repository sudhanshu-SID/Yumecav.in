import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem } from './types';

interface CartContextType {
  cartItems: CartItem[];
  cartTotal: number;
  isCartOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, type: 'inc' | 'dec') => void;
  setIsCartOpen: (isOpen: boolean) => void;
  MIN_ORDER: number;
  FREE_SHIP_THRESHOLD: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const MIN_ORDER = 99;
  const FREE_SHIP_THRESHOLD = 299;

  // Initialize from LocalStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem('yumecav_cart_v2');
      return localData ? JSON.parse(localData) : [];
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Auto-save to LocalStorage
  useEffect(() => {
    localStorage.setItem('yumecav_cart_v2', JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate Total
  const cartTotal = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);

  // Add Item
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Remove Item
  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Update Quantity
  const updateQuantity = (id: number, type: 'inc' | 'dec') => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = type === 'inc' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, cartTotal, isCartOpen, addToCart, removeFromCart, updateQuantity, setIsCartOpen, MIN_ORDER, FREE_SHIP_THRESHOLD 
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
