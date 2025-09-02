import "./itemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ heading }) => {
  const { categoryId } = useParams();

  return (
    <div className="item-list-container">
      <h1>{heading}</h1>
      {categoryId && <h2>Category: {categoryId}</h2>}
    </div>
  );
};
