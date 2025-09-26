import { Link } from "react-router-dom";
import "./productCard.css";
import fallbackImg from "../../assets/fallback-flower.png";

const FALLBACK = fallbackImg;


export default function ProductCard({ id, title, price, category, img, to }) {
  const href = to || `/item/${id}`;

  return (
    <li className="pc-card">
      <Link to={href} className="pc-link" aria-label={`Open details for ${title || "flower"}`}>
        <div className="pc-thumb">
          <img
            src={img || FALLBACK}
            alt={title || "Flower"}
            loading="lazy"
            onError={(e) => { e.currentTarget.src = FALLBACK; }}
          />
        </div>
        <h3 className="pc-title">{title || "Unnamed"}</h3>
      </Link>

      <p className="pc-meta">Category: {category || "—"}</p>
      <p className="pc-price">${Number(price || 0).toFixed(2)}</p>

      <div className="pc-actions">
        <Link to={href} className="pc-view-detail">View detail</Link>
      </div>
    </li>
  );
}
