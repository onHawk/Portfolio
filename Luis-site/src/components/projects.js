import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import { GoCode, GoDeviceDesktop } from 'react-icons/go'

const Projects = () => {
  return (
    <Container id="projects">
      <Row className="grid">
        <Col xl="4" md="6" className="p" id="gmmm">
          <div className="p-name">
            <h1 style={{ backgroundColor: '#e86c62' }}>
              GiveMe
              <br />
              MyMoney
            </h1>
          </div>
        </Col>

        <Col xl="1" md="2" className="details">
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

      <Row className="grid">
        <Col xl="4" md="6" className="p" id="lambdanotes">
          <div className="p-name">
            <h1 style={{ backgroundColor: '#A0011E' }}>Lambda Notes</h1>
          </div>
        </Col>

        <Col xl="1" md="2" className="details">
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

      <Row className="grid">
        <Col xl="4" md="6" className="p" id="chronicle">
          <div className="p-name">
            <h1 style={{ backgroundColor: '#a2daffbe' }}>
              tbd Memory Chronicles
            </h1>
          </div>
        </Col>

        <Col xl="1" md="2" className="details">
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
  )
}

export default Projects
