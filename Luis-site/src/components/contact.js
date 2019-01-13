import React from 'react'

import { Container, Row, Col } from 'reactstrap'

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

        <button className="form-button">Send</button>
      </form>
    </Container>
  )
}

export default Contact
