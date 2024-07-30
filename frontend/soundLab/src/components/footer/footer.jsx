import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>SoundLab is an online platform that offers comprehensive courses on sound engineering and the operation of various digital audio workstations (DAWs).</p>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <address>
              123 Main Street<br />
              Anytown, USA 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@soundlab.com
            </address>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 SoundLab.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
