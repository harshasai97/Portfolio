import { Container, Row, Col } from "react-bootstrap";
import notify from "../assets/img/notification.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={notify}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6} className="ps-10">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>

                  <Row size={12} sm={6} className="highlight px-1">
                    Busetti Sai Harsha
                  </Row>
                  <Row size={12} sm={6} className="highlight px-1">
                    busettisaiharsha@gmail.com
                  </Row>
                  <Row size={12} sm={6} className="highlight px-1">
                    (+91) 9445114808
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
