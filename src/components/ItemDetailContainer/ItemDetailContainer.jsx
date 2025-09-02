import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();

  return (
    <div>
      <h1>Product detail</h1>
      <p>Showing information for the product with id: {itemId}</p>
    </div>
  );
};