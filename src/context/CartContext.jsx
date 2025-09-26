import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(product, qty) {
    const q = Number(qty);
    if (!product || !product.id || !Number.isFinite(q) || q <= 0) return;

    setItems((prev) => {
      const i = prev.findIndex((p) => p.id === product.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + q };
        return copy;
      }
      return [...prev, { id: product.id, title: product.title ?? product.name ?? "Unnamed", price: Number(product.price ?? 0), qty: q, img: product.img }];
    });
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }

  function clearCart() {
    setItems([]);
  }

  const { count, total } = useMemo(() => {
    const c = items.reduce((acc, it) => acc + it.qty, 0);
    const t = items.reduce((acc, it) => acc + it.qty * Number(it.price ?? 0), 0);
    return { count: c, total: t };
  }, [items]);

  return (
    <CartContext.Provider value={{ items, count, total, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
