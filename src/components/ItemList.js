import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
      {products.map((product) => (
        <Item product={product} />
      ))}
      </div>
      
    </div>
  );
};

