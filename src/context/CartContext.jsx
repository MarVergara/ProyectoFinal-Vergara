import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  function addToCart(qty, price) {
    const n = Number(qty);
    const p = Number(price);
    if (!Number.isFinite(n) || n <= 0) return;
    if (!Number.isFinite(p) || p < 0) return;
    setCount((c) => c + n);
    setTotal((t) => t + n * p);
  }

  function resetCart() {
    setCount(0);
    setTotal(0);
  }

  return (
    <CartContext.Provider value={{ count, total, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
