import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../services";
import "./products.css";
import fallbackImg from "../../assets/fallback-flower.png";

const FALLBACK = fallbackImg;


export default function Products() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    setErr(null);
    services.products.getAll()
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch((e) => setErr(e?.message || "Unexpected error"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="products products-loading">Loading…</div>;
  if (err)     return <div className="products products-error">Error: {err}</div>;

  if (!items.length) {
    return (
      <div className="products products-empty">
        <h2 className="products-title">Products</h2>
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <section className="products">
      <h2 className="products-title">Products</h2>

      <ul className="products-grid">
        {items.map((p) => {
          const itemIdForLink = p.id ?? p.docId;
          return (
            <li key={p.docId || p.id} className="prod-card">
              <Link
                to={`/item/${itemIdForLink}`}
                className="prod-link"
                aria-label={`Open details for ${p.title ?? p.name ?? "flower"}`}
              >
                <div className="prod-thumb">
                  <img
                    src={p.img || FALLBACK}
                    alt={p.title ?? p.name ?? "Flower"}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = FALLBACK; }}
                  />
                </div>
                <h3 className="prod-title">{p.title ?? p.name ?? "Unnamed"}</h3>
              </Link>

              <p className="prod-meta">Category: {p.category ?? "—"}</p>
              <p className="prod-price">${Number(p.price ?? 0).toFixed(2)}</p>

              <div>
                <Link to={`/item/${itemIdForLink}`} className="prod-view">
                  View details
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
