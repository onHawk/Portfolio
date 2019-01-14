import React from 'react'

import { Container, Row, Col } from 'reactstrap'

const Contact = () => {
  return (
    <Container id="contact">
      <form className="form">
        <Row style={{ margin: '0 auto' }}>
          <Col xl="6" md="6" xs="12" className="form-groups">
            <label>Name</label>
            <input name="name" type="text" />
          </Col>

          <Col xl="6" md="6" s="12" className="form-groups">
            <label>Email</label>
            <input name="email" type="email" />
          </Col>
        </Row>

        <Row style={{ margin: '0 auto' }}>
          <Col id="messagefield">
            <label>Message</label>
            <textarea name="message" />
            <button className="form-button">Send</button>
          </Col>
        </Row>
      </form>
    </Container>
  )
}

export default Contact
