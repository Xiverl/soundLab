import React, { useState } from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import ContactModal from "../contact-modal/contact-modal";

function Products() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <h2 className="text-center mb-5">Услуги SoundLab</h2>
      <Row className="justify-content-center">
        <Col className="col-md-4 mb-4">
          <Card className="h-100">
            <Card.Img
              src="https://sun9-10.userapi.com/8XQozjrM5zCiP4yOsgdJN64dIsaE1ds3F5L3JQ/gQo5xxFV8bI.jpg"
              className="card-img-top"
              alt="Курс по DAW"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Курс по DAW</Card.Title>
              <Card.Text>
                Изучите популярные цифровые аудиорабочие станции и освойте
                навыки профессиональной звукозаписи.
              </Card.Text>
              <Button className="btn-primary mt-auto" onClick={handleShowModal}>
                Связаться с нами
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-4 mb-4">
          <Card className="h-100">
            <Card.Img
              src="https://avatars.dzeninfra.ru/get-zen_doc/1886085/pub_5fbd78669e83245705f41507_5fbd79a49e83245705f568c9/scale_1200"
              className="card-img-top"
              alt="Курс по сведению"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Курс по сведению</Card.Title>
              <Card.Text>
                Научитесь создавать сбалансированные и профессиональные миксы с
                помощью передовых техник микширования.
              </Card.Text>
              <Button className="btn-primary mt-auto" onClick={handleShowModal}>
                Связаться с нами
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-md-4 mb-4">
          <Card className="h-100">
            <Card.Img
              src="https://media.sweetwater.com/m/insync/2019/08/mastering-DAW-hero3.jpg?width=1024&height=535&fit=cover"
              className="card-img-top"
              alt="Курс по мастерингу"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Курс по мастерингу</Card.Title>
              <Card.Text>
                Освойте искусство мастеринга и доведите свои треки до
                профессионального уровня звучания.
              </Card.Text>
              <Button className="btn-primary mt-auto" onClick={handleShowModal}>
                Связаться с нами
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ContactModal show={showModal} onHide={handleCloseModal} />
    </Container>
  );
}

export default Products;
