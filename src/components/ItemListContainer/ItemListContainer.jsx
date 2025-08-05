import "./itemListContainer.css";

export const ItemListContainer = (props) => {
  return (
    <div className="item-list-container">
      <h1>{props.heading}</h1>
    </div>
  );
};
