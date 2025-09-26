import "./cartItem.css";

export default function CartItem({ id, title, price, qty, img, onRemove }) {
  const subtotal = Number(price || 0) * Number(qty || 0);

  return (
    <li className="ci-item">
      <img
        src={img || "https://via.placeholder.com/80x60.png?text=Flower"}
        alt={title || "Flower"}
        className="ci-thumb"
      />

      <div className="ci-info">
        <strong>{title || "Unnamed"}</strong>
        <span>Qty: {qty}</span>
        <span>${Number(price || 0).toFixed(2)} each</span>
      </div>

      <div className="ci-subtotal">${subtotal.toFixed(2)}</div>

      <button className="ci-remove" onClick={() => onRemove?.(id)}>
        Remove
      </button>
    </li>
  );
}
