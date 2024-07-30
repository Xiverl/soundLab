import { Container, Row, Col } from "react-bootstrap";

function Gallery() {
  return (
    <Container>
      <Row className="py-5">
        <Col lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            className="w-100 shadow-1-strong rounded mb-4"
            src="https://nacasting.ru/images/uploads/user1253/zvukorezhiser.jpg"
            alt="First slide"
          />
          <img
            className="w-100 shadow-1-strong rounded mb-4"
            src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65c918dafcd0940ad7530c96_65c919cbfcd0940ad7548750/scale_1200"
            alt="First slide"
          />
        </Col>
        <Col lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src="https://www.mitro-tv.ru/netcat_files/Image/zvrej_01(1).jpeg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />
          <img
            src="https://sosh1-12.ru/wp-content/uploads/2023/11/denisse-leon-ovewbigffdk-unsplash@2x.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </Col>
        <Col lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src="https://ekvalajzer.com/wp-content/uploads/2024/01/f8f7eab9-cbf7-41e5-acef-d5845d758eb1.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src="https://studio-ostankino.ru/wp-content/uploads/2021/05/15-9-e1622716029206.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
