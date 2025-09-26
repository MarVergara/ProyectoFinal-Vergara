import { useCart } from "../../context/CartContext";

export const CartWidget = () => {
  const { count, total } = useCart();
  const formatted = `$${total.toFixed(2)}`;
  return (
    <div title="Cart">
      <span>🛒 {count} • {formatted}</span>
    </div>
    
  );
};
