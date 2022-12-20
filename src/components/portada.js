import Carousel from 'react-bootstrap/Carousel';
import caroussel1 from "../assets/caroussel1.png"
import caroussel2 from "../assets/carousel2.jpg"
import caroussel3 from "../assets/carouselChico.jpg"

function Portada () {
    return(
            <Carousel fade>
      <Carousel.Item>
        <img
          className="imagenCaroussel d-block w-100"
          src={caroussel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagenCaroussel d-block w-100"
          src={caroussel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagenCaroussel d-block w-100"
          src={caroussel3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  
    )
}

export default Portada;