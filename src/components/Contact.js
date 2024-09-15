import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Contact = () => {
  const formDetails = {
    firstName: "Busetti",
    lastName: "Sai Harsha",
    email: "busettisaiharsha@gmail.com",
    phone: "(+91) 9445114808",
    message: "",
  };

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
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          disabled
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          disabled
                        />
                      </Col>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        disabled
                      />
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <input
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        disabled
                      />
                    </Row>
                  </form>
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
