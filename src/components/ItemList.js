import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="container-flex">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </div>
  );
};

export default ItemList;