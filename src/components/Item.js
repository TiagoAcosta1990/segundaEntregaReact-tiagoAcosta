import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const Item = ({ product }) => {
    return (
      <div className='container-fluid'>
        <div className='flex-row'>
          <div className='flex-col'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" className="imagen__alto" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <div>
                  ${product.price}
                    </div>
                    
                </Card.Text>
                <button className='botonDetalle'><Link to="/item/identificacion" className="links text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Ver Detalles</Link></button>
                <Button variant="success">AGREGAR AL CARRITO</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
              
    );
  };
  
  export default Item;

  


