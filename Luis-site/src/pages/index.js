import React, { Component } from 'react'

import Layout from '../components/layout'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'

import { Row, Col } from 'reactstrap'
import {
  FaGithub,
  FaLinkedin,
  // FaMobileAlt,
  // FaAddressCard,
  // FaEnvelope,
  // FaGlobe,
} from 'react-icons/fa'

import posed from 'react-pose'

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  transition: {
    delay: 500,
  },
})
class IndexPage extends Component {
  state = {
    isVisible: true,
  }

  // componentDidMount() {
  //   this.setState({ isVisible: !this.state.isVisible })
  // }

  render() {
    return (
      <Layout>
        <Box className="box" pose={this.state.isVisible ? 'visible' : 'hidden'}>
          <About />
        </Box>

        <Projects />

        <Contact />
        <footer className="foot">
          <Row style={{ height: '60px', margin: '0' }}>
            <Col className="foot-links">
              <p style={{ margin: '9px', color: 'white' }}>
                © {new Date().getFullYear()}
              </p>
            </Col>

            <Col className="foot-links">
              <a
                href="https://www.github.com/Luisdh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size="30px" />
              </a>
            </Col>

            <Col className="foot-links">
              <a
                href="https://www.linkedin.com/in/luis-diaz-herrera-11a306168/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size="30px" />
              </a>
            </Col>
          </Row>
        </footer>
      </Layout>
    )
  }
}

export default IndexPage
