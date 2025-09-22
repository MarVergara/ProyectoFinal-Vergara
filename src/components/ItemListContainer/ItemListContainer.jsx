import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts } from "../../data/products";

export const ItemListContainer = ({ heading = "Catalog" }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((data) => setItems(data))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <div className="item-list-container"><p>Loading products…</p></div>;

  if (!items.length) {
    return (
      <div className="item-list-container">
        <h1>{heading}</h1>
        {categoryId && <h2>Category: {categoryId}</h2>}
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <h1>{heading}</h1>
      {categoryId && <h2>Category: {categoryId}</h2>}
      <ul className="items">
        {items.map((p) => (
          <li key={p.id} className="card">
            <h3>{p.title}</h3>
            <p>Category: {p.category}</p>
            <p>Price: ${p.price}</p>
            <Link to={`/item/${p.id}`}>View detail</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
