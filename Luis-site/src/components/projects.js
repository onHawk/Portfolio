import React from 'react'

import { Container, Row, Col } from 'reactstrap'

import { GoCode, GoDeviceDesktop } from 'react-icons/go'

const Projects = () => {
  return (
    <div id="projects">
      <Row className="grid">
        {/* style={{ backgroundColor: '#e86c62be' }} */}
        <Col xl="4" md="6" className="p" id="gmmm">
          <div className="p-name">
            <h1>
              GiveMe
              <br />
              MyMoney
            </h1>
            <p>
              Upload client invoices.
              <br />
              Client can send payment quick and easy through app.
            </p>
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
        </Col>
      </Row>
      {/* style={{ backgroundColor: '#333333be' }} */}
      <Row className="grid">
        <Col xl="4" md="6" className="p" id="lambdanotes">
          <div className="p-name">
            <h1>Lambda Notes</h1>
            <p>A note app</p>
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
      {/* style={{ backgroundColor: '#a2daffbe' }} */}
      <Row className="grid">
        <Col xl="4" md="6" className="p" id="chronicle">
          <div className="p-name">
            <h1>tbd Memory Chronicles</h1>
            <p>Journaling app</p>
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
    </div>
  )
}

export default Projects
