import React from 'react'

import { Row, Col } from 'reactstrap'

const Projects = () => {
  return (
    <div style={{ minWidth: '100%' }} id="projects">
      <div className="titles">
        <h1>Projects</h1>
      </div>

      <div className="project_grid">
        <Row>
          <Col xl="4" l="4" md="5" s="12" xs="12" className="p" id="gmmm">
            <a href="www.givememymoney.app" target="_blank">
              GiveMeMyMoney
            </a>
          </Col>
          <Col
            xl="4"
            l="4"
            md="5"
            s="12"
            xs="12"
            className="p"
            id="lambdanotes"
          >
            <a href="l-notes.netlify.com" target="_blank">
              {' '}
              Lambda Notes
            </a>
          </Col>
          <Col xl="4" l="4" md="5" s="12" xs="12" className="p" id="chronicle">
            <a>Chronicle</a>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Projects
