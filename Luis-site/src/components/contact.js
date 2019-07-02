import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import {
  FaGithub,
  FaLinkedin,
  FaMobileAlt,
  FaAddressCard,
  FaEnvelope,
  FaGlobe,
  FaColumns,
} from 'react-icons/fa'

const Contact = () => {
  return (
    <div id="contact" className="sections">
      <div className="titles">
        <h2>Contact me</h2>
      </div>
      <div className="contact_container">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="form"
        >
          <Row className="row_container">
            <Col xl="6" md="6" xs="12" className="form-groups">
              <label>Name</label>
              <input name="name" type="text" placeholder="your name" />
            </Col>

            <Col xl="6" md="6" s="12" className="form-groups">
              <label>Email</label>
              <input name="email" type="email" placeholder="your email" />
            </Col>
          </Row>
          {/* <div data-netlify-recaptcha="true"></div> */}
          <Row className="row_container">
            <Col id="messagefield">
              <label>Message</label>
              <textarea name="message" />
              <button className="form-button" type="submit">
                Send
              </button>
            </Col>
          </Row>
        </form>

        <div className="info_container">
          <div className="myinfo">
            <FaAddressCard size="20" />
            <p> 770.778.9995 </p>
          </div>

          <div className="myinfo">
            <FaEnvelope size="20" />
            <a href="mailto:luisd824@gmail.com">luisd824@gmail.com</a>
          </div>

          <div className="myinfo">
            <FaGlobe size="20" />
            <p>Atlanta Area, GA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
