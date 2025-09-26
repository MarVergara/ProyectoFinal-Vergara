import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../../services";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";
import fallbackImg from "../../assets/fallback-flower.png";

const FALLBACK = fallbackImg;

function ItemCount({ onAdd }) {
  const [qty, setQty] = useState(1);
  return (
    <div className="count">
      <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
      <span>{qty}</span>
      <button onClick={() => setQty((q) => q + 1)}>+</button>
      <button disabled={qty < 1} onClick={() => onAdd(qty)}>Add to cart</button>
    </div>
  );
}

export default function ItemDetail() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    setErr(null);
    services.products.getById(itemId)
      .then((data) => setItem(data))
      .catch((e) => setErr(e?.message || "Unexpected error"))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <div style={{ padding: 16 }}>Loading…</div>;
  if (err)     return <div style={{ padding: 16, color: "crimson" }}>Error: {err}</div>;
  if (!item)   return <div style={{ padding: 16 }}>Product not found.</div>;

  return (
    <div className="item-detail">
      <div className="item-media">
        <img
          src={item.img || FALLBACK}
          alt={item.title ?? item.name ?? "Flower"}
          onError={(e) => { e.currentTarget.src = FALLBACK; }}
        />
      </div>

      <div>
        <h1 className="item-title">Product detail</h1>
        <h2 className="item-subtitle">{item.title ?? item.name ?? "Unnamed"}</h2>
        <p className="item-subtitle">Category: {item.category ?? "—"}</p>
        <p className="item-price">${Number(item.price ?? 0).toFixed(2)}</p>

        <ItemCount
          onAdd={(q) => {
            addItem(
              { id: item.id, title: item.title, price: item.price, img: item.img },
              q
            );
            alert(`Added ${q} item(s) to cart`);
          }}
        />
      </div>
    </div>
  );
}
