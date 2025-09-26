import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../../services";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./catalog.css";

export default function Catalog({ heading = "Product catalog" }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    setErr(null);
    services.products
      .getAll(categoryId)
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch((e) => setErr(e?.message || "Unexpected error"))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <div className="catalog catalog-loading"><p>Loading products…</p></div>;
  if (err)     return <div className="catalog catalog-error"><p>Error: {err}</p></div>;

  return (
    <div className="catalog">
      <h1>{heading}</h1>
      {categoryId && <h2>Category: {categoryId}</h2>}

      {!items.length ? (
        <p className="catalog-empty">No products found.</p>
      ) : (
        <ul className="product-grid">
          {items.map((p) => (
            <ProductCard
              key={p.docId || p.id}
              id={p.id ?? p.docId}
              title={p.title ?? p.name}
              price={p.price}
              category={p.category}
              img={p.img}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
