import { Carousel, Container } from "react-bootstrap";

function Carusel() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.djcity.com.au/wp-content/uploads/2020/06/19173255/abelton-daw.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.djcity.com.au/wp-content/uploads/2020/06/18125212/logic.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.djcity.com.au/wp-content/uploads/2020/06/19172526/ableton-desk.jpg"
            alt="Tgirds slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Carusel;
