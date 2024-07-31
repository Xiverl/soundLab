import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faChalkboardTeacher,
  faGlobe,
  faUserTie
} from "@fortawesome/free-solid-svg-icons";

function Info() {
  return (
    <Container className="py-5">
      <hr className="hr-primary"></hr>
      <h2 className="text-center mb-5">Ключевые особенности SoundLab</h2>
      <Row className="justify-content-center">
        <Col className="col-md-6 mb-4 text-center text-md-left">
          <div class="d-flex align-items-center">
            <div className="me-4">
              <FontAwesomeIcon icon={faMicrophone} size="3x" />
            </div>
            <div>
              <h4>Широкий спектр курсов</h4>
              <ul className="list-unstyled text-left">
                <li>Основы звукорежиссуры</li>
                <li>Изучение популярных DAW</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col className="col-md-6 mb-4 text-center text-md-left">
          <div class="d-flex align-items-center">
            <div className="me-4">
              <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" />
            </div>
            <div>
              <h4> Интерактивный формат обучения </h4>
              <ul className="list-unstyled text-left">
                <li>Видео-уроки с инструкциями</li>
                <li>Практические задания и проекты</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col className="col-md-6 mb-4 text-center text-md-left">
          <div class="d-flex align-items-center">
            <div className="me-4">
              <FontAwesomeIcon icon={faGlobe} size="3x" />
            </div>
            <div>
              <h4>Гибкость и доступность</h4>
              <ul className="list-unstyled text-left">
                <li>Онлайн-формат обучения</li>
                <li>Различные планы подписки</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col className="col-md-6 mb-4 text-center text-md-left">
          <div class="d-flex align-items-center">
            <div className="me-4">
              <FontAwesomeIcon icon={faUserTie} size="3x" />
            </div>
            <div>
              <h4>Экспертная команда</h4>
              <ul className="list-unstyled text-left">
                <li>Преподаватели-профессионалы</li>
                <li>Постоянное обновление контента</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <hr className="hr-primary"></hr>
    </Container>
  );
}

export default Info;
