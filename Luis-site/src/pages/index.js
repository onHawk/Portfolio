import React from 'react'

import Layout from '../components/layout'
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
    <div style={{ backgroundColor: '#333333' }} className="sections">
      <About />
    </div>

    <div className="sections">
      <Projects />
    </div>

    <div style={{ backgroundColor: '#333333' }} className="sections">
      <Contact />
    </div>

    <footer className="foot">
      <Row style={{ margin: '0' }}>
        <Col className="myinfo" style={{ borderRight: '1px solid #333333' }}>
          <FaAddressCard size="34px" />
          <p> 770.778.9995 </p>
        </Col>

        <Col className="myinfo" style={{ borderLeft: '1px solid #333333' }}>
          <FaEnvelope size="34px" />
          <a href="mailto:luisd824@gmail.com">luisd824@gmail.com</a>
        </Col>

        <Col className="myinfo" style={{ borderLeft: '1px solid #333333' }}>
          <FaGlobe size="34px" />
          <p>Atlanta Area, GA</p>
        </Col>
      </Row>

      <Row style={{ height: '60px', margin: '0' }}>
        <Col className="foot-links">
          <p style={{ margin: '9px', color: '#5fa5ff73' }}>
            © {new Date().getFullYear()}
          </p>
        </Col>

        <Col className="foot-links">
          <a
            href="https://www.github.com/Luisdh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="34" />
          </a>
        </Col>

        <Col className="foot-links">
          <a
            href="https://www.linkedin.com/in/luis-diaz-herrera-11a306168/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size="34" />
          </a>
        </Col>
      </Row>
    </footer>
  </Layout>
)

export default IndexPage
