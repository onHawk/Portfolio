import React from 'react'

import { Container, Row, Col } from 'reactstrap'

const Contact = () => {
  return (
    <div id="contact" className="sections">
      <div className="titles">
        <h2>Contact me</h2>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="form"
      >
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
        {/* <div data-netlify-recaptcha="true"></div> */}
        <Row style={{ margin: '0 auto' }}>
          <Col id="messagefield">
            <label>Message</label>
            <textarea name="message" />
            <button className="form-button" type="submit">
              Send
            </button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default Contact
