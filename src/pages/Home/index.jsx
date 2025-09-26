import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../services";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./home.css";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    services.products
      .getAll()
      .then((all) => setFeatured((all || []).slice(0, 3)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">PMO - The flowershop</h1>
        <p className="hero-subtitle">
          Fresh bouquets & indoor plants—delivered with care.
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="cta-button">Shop all products</Link>
          <Link to="/contact" className="btn-outline">Contact us</Link>
        </div>
      </section>

      <section className="usps">
        {[
          { title: "Same-day delivery", desc: "Order before 3 PM." },
          { title: "Eco packaging", desc: "Recyclable & plastic-free." },
          { title: "Hand-tied bouquets", desc: "Crafted by florists." },
        ].map((u) => (
          <div key={u.title} className="usp-card">
            <h3>{u.title}</h3>
            <p>{u.desc}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="categories-title">Browse by category</h2>
        <div className="categories">
          <Link to="/category/bouquets" className="pill">Bouquets</Link>
          <Link to="/category/indoor" className="pill">Indoor Plants</Link>
          <Link to="/category/succulents" className="pill">Succulents</Link>
        </div>
      </section>

      <section>
        <h2 className="featured-title">Featured</h2>
        {loading ? (
          <p>Loading…</p>
        ) : !featured.length ? (
          <p>No products yet.</p>
        ) : (
          <ul className="product-grid">
            {featured.map((p) => (
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
      </section>
    </div>
  );
}
