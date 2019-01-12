import React from 'react'

import { Container, Row, Col } from 'reactstrap'

const Contact = () => {
  return (
    <Container id="contact">
      <form>
        <Row>
          <Col className="form-groups">
            <label>Name</label>
            <input name="name" placeholder="Name..." type="text" />
          </Col>

          <Col className="form-groups">
            <label>Email</label>
            <input name="email" placeholder="email..." type="email" />
          </Col>
        </Row>

        <Row>
          <Col id="messagefield">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Can't forget what to say..."
            />
          </Col>
        </Row>
        <Row style={{ margin: '20px' }}>
          <Col>
            <button className="form-button">Send</button>
          </Col>
        </Row>
      </form>
    </Container>
  )
}

export default Contact
