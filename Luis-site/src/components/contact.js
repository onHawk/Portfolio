import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import {
  FaGithub,
  FaLinkedin,
  FaMobileAlt,
  FaAddressCard,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa'

const Contact = () => {
  return (
    <Container id="contact">
      <form className="form">
        <Row>
          <Col xl="6" md="6" s="12" className="form-groups">
            <label>Name</label>
            <input name="name" type="text" />
          </Col>

          <Col xl="6" md="6" s="12" className="form-groups">
            <label>Email</label>
            <input name="email" type="email" />
          </Col>
        </Row>

        <Row>
          <Col id="messagefield">
            <label>Message</label>
            <textarea name="message" />
          </Col>
        </Row>

        <Row>
          <Col className="myinfo">
            <FaAddressCard size="34px" />
            <p> 770.778.9995 </p>
          </Col>

          <Col className="myinfo">
            <FaEnvelope size="34px" />
            <a href="mailto:luisd824@gmail.com">luisd824@gmail.com</a>
          </Col>

          <Col className="myinfo">
            <FaGlobe size="34" />
            <p style={{ fonztSize: '18px', margin: '0' }}>
              7472 Majestic Lane <br />
              Flowery Branch, Ga 30542
            </p>
          </Col>
        </Row>

        <button className="form-button">Send</button>
      </form>
    </Container>
  )
}

export default Contact
