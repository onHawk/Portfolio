import React from 'react'

import { Row, Col } from 'reactstrap'

import { GoCode, GoDeviceDesktop } from 'react-icons/go'

const Projects = () => {
  return (
    <div id="projects">
      <div className="titles">
        <h2 style={{ color: '#f0f0f0' }}>My Portfolio</h2>
      </div>
      <Row className="grid">
        <Col xl="3" md="5" className="p" id="gmmm">
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

        <Col xl="1" md="1" className="details">
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

      <Row className="grid">
        <Col xl="3" md="5" className="p" id="lambdanotes">
          <div className="p-name">
            <h1>Lambda Notes</h1>
            <p>
              A note app built in React front-end, Node and MongoDB back-end.
            </p>
          </div>
        </Col>

        <Col xl="1" md="1" className="details">
          <div className="details-links">
            <a
              href="https://github.com/Luisdh/front-end-project-week"
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
        <Col xl="3" md="5" className="p" id="chronicle">
          <div className="p-name">
            <h1>Memory Chronicles</h1>
            <p>
              Journaling app built in React front-end, Node and MongoDB
              back-end. Looks elegant and as straight forward as can be.
            </p>
          </div>
        </Col>

        <Col xl="1" md="1" className="details">
          <div className="details-links">
            <a
              href="https://github.com/Luisdh/Memory"
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

      <Row className="grid">
        <Col xl="3" md="5" className="p" id="quicknews">
          <div className="p-name">
            <h1 style={{ color: '#333333' }}>Quicknews</h1>
            <p>
              News browsing mobile app I made in React-Native. Using News api
              from <span style={{ color: 'green' }}>newsapi.org</span>. It grabs
              top headlines given a news outlet or a topic category. Apk is
              available only for android right now.
            </p>
          </div>
        </Col>

        <Col xl="1" md="1" className="details">
          <div className="details-links">
            <a
              href="https://github.com/Luisdh/quicknews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoCode />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Projects
