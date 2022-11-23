
const ItemDetail = ({ item }) => {
    return (
      <div>
        
        <img src={item.img} alt={item.name} />
        <div>{item.name}</div>
        <div>{item.description}</div>
        <div>{item.peso}</div>
        <div>{item.stock}</div>
        <div>{item.price}</div>

      </div>
    );
  };
  
  export default ItemDetail;