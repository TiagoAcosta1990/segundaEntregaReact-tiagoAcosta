
const ItemDetail = ({ item }) => {
    return (
      <div>
        
        <img className="imagenDetail" src={item.img} alt={item.name} />
        <div>Nombre: {item.name}</div>
        <div>{item.description}</div>
        <div>{item.peso}</div>
        <div>Stock: {item.stock}</div>
        <div>Precio: ${item.price}</div>

      </div>
    );
  };
  
  export default ItemDetail;