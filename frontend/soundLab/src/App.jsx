import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Modal,
  Form,
  Button
} from "react-bootstrap";
import Header from "./components/header/header";
import About from "./pages/about";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Services() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Услуги SoundLab</h2>
      <Row className="justify-content-center">
        {/* Services content */}
      </Row>
    </Container>
  );
}

function ContactModal() {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Заголовок модального окна</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form action="{% url 'feedback:submit-info' %}" method="post">
          {/* Form content */}
          <Button variant="primary" type="submit">
            Отправить
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Отмена
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default App;
