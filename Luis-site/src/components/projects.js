import React from 'react'

import { Row, Col } from 'reactstrap'

import { GoCode, GoDeviceDesktop } from 'react-icons/go'

const Projects = () => {
  return (
    <div id="projects" className="sections">
      <div className="titles">
        <h2>My Portfolio</h2>
      </div>
      <Row className="grid project-section">
        <Col xl="3" l="5" md="5" className="p project-image" id="gmmm" />

        <Col md="6" className="details" style={{ backgroundColor: '#f5f5dc' }}>
          <div className="details-body">
            <h4 style={{ color: '#e86c62' }}>GiveMeMyMoney</h4>
            <p>
              Streamline the process of sending invoices and receiving money
              from clients with GiveMeMyMoney. Built using React.js on the
              frontend, and Node.js and MongoDB on the backend. Integrates with
              the Stripe API for handling payments.
              <br />
              <br /> As part of the team that built this project, I handled the
              reminders feature, which sends either an SMS or an email to
              clients letting them know when an invoice is due and how to pay it
              using Stripe.
            </p>

            <div className="details-links">
              <a
                href="https://github.com/Lambda-School-Labs/CS8-payme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoCode />
              </a>

              <a
                href="http://givememymoney.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoDeviceDesktop />
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="grid project-section">
        <Col xl="3" l="5" md="5" className="p project-image" id="lambdanotes" />

        <Col
          md="6"
          className="details"
          style={{ margin: '0', backgroundColor: '#bb1333' }}
        >
          <div className="details-body">
            <h4 style={{ color: '#f0f0f0' }}>Lambda Notes</h4>
            <p>
              An app that I built for taking notes during my Lambda School
              classes. Built using React.js on the frontend, and Node.js and
              MongoDB on the backend.
            </p>
            <div className="details-links">
              <a
                href="https://github.com/Luisdh/front-end-project-week"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoCode />
              </a>
              <a
                href="https://l-notes.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoDeviceDesktop />
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="grid project-section">
        <Col xl="3" l="5" md="5" className="p project-image" id="chronicle" />

        <Col md="6" className="details" style={{ backgroundColor: ' #faf7f0' }}>
          <div className="details-body">
            <h4 style={{ color: '#a2daff' }}>Memory Chronicles</h4>
            <p style={{ color: '#333333' }}>
              Simple & easy to use journaling web app built using React.js on
              the frontend, and Node.js and MongoDB on the backend.
              <br />
              <br /> This is one of my personal ongoing projects. Will also be
              released soon as a mobile app on iOS and Android.
            </p>
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
          </div>
        </Col>
      </Row>

      <Row className="grid project-section">
        <Col xl="3" md="5" className="p project-image" id="quicknews" />

        <Col
          md="6"
          className="details"
          style={{
            backgroundColor: '#2c99ff',
          }}
        >
          <div className="details-body">
            <h4>Quicknews</h4>
            <p>
              Mobile app for browsing the news, sourced from newsapi.org. Built
              using React Native and released on Android. Soon to be released on
              iOS.
            </p>
            <div className="details-links">
              <a
                href="https://github.com/Luisdh/quicknews"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoCode />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Projects
