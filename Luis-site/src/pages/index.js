import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'

import { Container, Row, Col } from 'reactstrap'
import {
  FaGithub,
  FaLinkedin,
  FaMobileAlt,
  FaAddressCard,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <About />
    <div className="titles">
      <h2>My Projects</h2>
    </div>
    <Projects />
    <div className="titles">
      <h2>Contact me</h2>
    </div>
    <Contact />
    <footer className="foot">
      <Row style={{ marginTop: '1rem' }}>
        <Col className="myinfo">
          <FaAddressCard size="34px" />
          <p> 770.778.9995 </p>
        </Col>

        <Col className="myinfo">
          <FaEnvelope size="34px" />
          <a href="mailto:luisd824@gmail.com">luisd824@gmail.com</a>
        </Col>

        <Col className="myinfo" md="12">
          <FaGlobe size="34" />
          <p style={{ fonztSize: '18px', margin: '0' }}>
            7472 Majestic Lane <br />
            Flowery Branch, Ga 30542
          </p>
        </Col>
      </Row>

      <Row className="foot-links">
        <Col>
          <p style={{ margin: '9px' }}>© {new Date().getFullYear()}</p>
        </Col>
        <Col>
          <FaGithub size="34" color="#333333" />
        </Col>
        <Col>
          <a href="https://www.linkedin.com/in/luis-diaz-herrera-11a306168/">
            <FaLinkedin size="34" color="#333333" />
          </a>
        </Col>
      </Row>
    </footer>
  </Layout>
)

export default IndexPage
