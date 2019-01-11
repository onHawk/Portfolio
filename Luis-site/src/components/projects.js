import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import { GoCode, GoDeviceDesktop } from 'react-icons/go'

const Projects = () => {
  return (
    <div id="projects">
      <div className="titles">
        <h1>Projects</h1>
      </div>

      <Container>
        <Row>
          <Col xl="4" md="5" s="12" className="p" id="gmmm" />

          <Col xl="5" md="6" s="12" className="details">
            {/* <a
              href="www.givememymoney.app"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a> */}
            <h1 style={{ color: '#e86c62' }}>GiveMeMyMoney</h1>
            <div className="details-links">
              <a
                href="https://github.com/Lambda-School-Labs/CS8-payme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoCode />
              </a>
              <a
                href="https://www.givememymoney.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoDeviceDesktop />
              </a>
            </div>
            <p />
          </Col>
        </Row>

        <Row>
          <Col xl="4" md="5" s="12" className="p" id="lambdanotes" />

          <Col xl="5" md="6" s="12" className="details">
            {/* <a
              href="l-notes.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a> */}
            <h1 style={{ color: 'crimson' }}>Lambda Notes</h1>

            <div className="details-links">
              <a
                href="https://github.com/onHawk/front-end-project-week"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoCode />
              </a>
              <a
                href="l-notes.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoDeviceDesktop />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xl="4" md="5" s="12" className="p" id="chronicle" />

          <Col xl="5" md="6" s="12" className="details">
            {/* <a
              href="http://chronicle-memory.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a> */}
            <h1 style={{ color: '#a2daff' }}>Chronicle</h1>

            <div className="details-links">
              <a
                href="https://github.com/onHawk/Memory"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoCode />
              </a>
              <a
                href="https://chronicle-memory.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoDeviceDesktop />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
