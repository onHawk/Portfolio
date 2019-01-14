import React from 'react'

import { Container, Row, Col } from 'reactstrap'

const Contact = () => {
  return (
    <Container id="contact">
      <form className="form">
        <Row>
          <Col
            xl="6"
            md="6"
            s="12"
            className="form-groups"
            style={{
              borderRight: '1px solid #5fa5ff73',
              borderRadius: '3px 0 0 0 ',
            }}
          >
            <label>Name</label>
            <input name="name" type="text" />
          </Col>

          <Col
            xl="6"
            md="6"
            s="12"
            className="form-groups"
            style={{
              borderLeft: '1px solid #5fa5ff73',
              borderRadius: '0 3px 0 0 ',
            }}
          >
            <label>Email</label>
            <input name="email" type="email" />
          </Col>
        </Row>

        <Row>
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
