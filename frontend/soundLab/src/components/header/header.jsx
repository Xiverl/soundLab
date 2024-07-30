import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactModal from '../contact-modal/contact-modal';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            SoundLab
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav>
              <Nav.Link as={Link} to="/">
                О нас
              </Nav.Link>
            </Nav>
            <Button variant="primary" onClick={handleShowModal}>
              Связаться с нами
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ContactModal show={showModal} onHide={handleCloseModal} />
    </>
  );
}

export default Header;
