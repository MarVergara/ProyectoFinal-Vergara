import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products";

function ItemCount({ onAdd }) {
  const [qty, setQty] = useState(1);
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12 }}>
      <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
      <span>{qty}</span>
      <button onClick={() => setQty((q) => q + 1)}>+</button>
      <button onClick={() => onAdd(qty)}>Add to cart</button>
    </div>
  );
}

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((data) => setItem(data))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <div style={{ padding: 16 }}><p>Loading…</p></div>;
  if (!item)   return <div style={{ padding: 16 }}><p>Product not found.</p></div>;

  return (
    <div style={{ padding: 16 }}>
      <h1>Product detail</h1>
      <h2>{item.title}</h2>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      <ItemCount onAdd={(q) => alert(`Added ${q} item(s) to cart`)} />
    </div>
  );
};
