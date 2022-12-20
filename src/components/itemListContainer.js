import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


// Own components
import ItemList from "./ItemList";

// Mock
import { Items } from "../mocks/item.mock";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(Items);
      }, 2000)
    ).then((data) => {
      if (category) {
        const categories = data.filter(
          (product) => product.category === category
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-full contenedorProductos">
      <ItemList  products={products} />
    </div>
  );
};

export default ItemListContainer;