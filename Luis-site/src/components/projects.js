import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import { GoCode, GoDeviceDesktop } from 'react-icons/go'

const Projects = () => {
  return (
    <div id="projects">
      <div className="titles">
        <h1>Projects</h1>
      </div>

      <Container style={{ padding: '0' }}>
        <Row style={{ margin: '.5rem 0' }}>
          <Col md="6" s="12" className="p" id="gmmm" />

          <Col md="6" s="12" className="details">
            <a
              href="www.givememymoney.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 style={{ color: '#e86c62' }}>GiveMeMyMoney</h1>
            </a>
            <div className="details-links">
              <a href="www.givememymoney.app">
                <GoCode />
              </a>
              <a href="https://github.com/Lambda-School-Labs/CS8-payme">
                <GoDeviceDesktop />
              </a>
            </div>
            <p />
          </Col>
        </Row>

        <Row style={{ margin: '.5rem 0' }}>
          <Col md="6" s="12" className="p" id="lambdanotes" />

          <Col md="6" s="12" className="details">
            <a
              href="l-notes.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 style={{ color: 'crimson' }}>Lambda Notes</h1>
            </a>

            <div className="details-links">
              <a href="l-notes.netlify.com">
                <GoCode />
              </a>
              <a href="https://github.com/onHawk/front-end-project-week">
                <GoDeviceDesktop />
              </a>
            </div>
          </Col>
        </Row>

        <Row style={{ margin: '.5rem 0' }}>
          <Col md="6" s="12" className="p" id="chronicle" />

          <Col md="6" s="12" className="details">
            <a
              href="http://chronicle-memory.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 style={{ color: '#a2daff' }}>Chronicle</h1>
            </a>

            <div className="details-links">
              <a href="https://github.com/onHawk/Memory">
                <GoCode />
              </a>
              <a href="http://chronicle-memory.herokuapp.com">
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
