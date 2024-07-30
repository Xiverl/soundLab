import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>SoundLab is an online platform that offers comprehensive courses on sound engineering and the operation of various digital audio workstations (DAWs).</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
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
            <p>&copy; 2023 SoundLab. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
