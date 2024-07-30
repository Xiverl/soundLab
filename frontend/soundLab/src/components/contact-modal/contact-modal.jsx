import React, { useState } from 'react';
import { Modal, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { CheckCircle, ExclamationTriangle } from 'react-bootstrap-icons';

function ContactModal({ show, onHide }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const requestData = {
      fio: formData.fullName,
      mobile: formData.phone,
    };

    fetch('http://127.0.0.1:8000/api/submit/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Форма успешно отправлена');
          setFormData({
            fullName: '',
            phone: '',
          });
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
            onHide();
          }, 3000);
        } else {
          console.error('Ошибка при отправке формы');
          setShowErrorAlert(true);
          setTimeout(() => {
            setShowErrorAlert(false);
            onHide();
          }, 3000);
        }
      })
      .catch((error) => {
        console.error('Ошибка при отправке формы:', error);
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);
          onHide();
        }, 3000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Заголовок модального окна</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showSuccessAlert && (
          <Alert variant="success">
            <Alert.Heading>
              <CheckCircle /> Данные успешно отправлены!
            </Alert.Heading>
          </Alert>
        )}
        {showErrorAlert && (
          <Alert variant="danger">
            <Alert.Heading>
              <ExclamationTriangle /> Произошла ошибка при отправке данных.
            </Alert.Heading>
          </Alert>
        )}
        {!showSuccessAlert && !showErrorAlert && (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName">
              <Form.Label>ФИО</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span> Отправка...</span>
                </>
              ) : (
                'Отправить'
              )}
            </Button>
            <Button variant="secondary" onClick={onHide}>
              Отмена
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ContactModal;
