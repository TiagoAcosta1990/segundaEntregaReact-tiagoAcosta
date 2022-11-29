import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";




const Item = ({ product }) => {
    return (
      
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" className="imagen__alto" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <div>
                  ${product.price}
                    </div>
                    
                </Card.Text>
                <button className='botonDetalle'><Link to={`/item/${product.id}`} className="links text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Ver Detalles</Link></button>
                <Button variant="success">AGREGAR AL CARRITO</Button>
              </Card.Body>
            </Card>
          
              
    );
  };
  
  export default Item;

  


