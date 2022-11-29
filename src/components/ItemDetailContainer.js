import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import { item as itemMock } from "../mocks/item.mock";

const ItemDetailContainer = () => {
  const [ item, setItem ] = useState (null);

  const { id } = useParams ();

  useEffect (() => {
    new Promise ((resolve) => setTimeout ( () => resolve(itemMock [id - 1]), 2000))
      .then((data) => setItem(data)
      );
  }, [ id ]);

  if ( !item ) {
    return <p>Loading...</p>;
  }

  return <ItemDetail item = { item } />;
};

export default ItemDetailContainer;