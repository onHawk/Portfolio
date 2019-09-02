// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import '../sass/header.scss'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div id="intro">
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      <p>
        Full-Stack Software Engineer <br /> looking to create the coolest
        software.
      </p>
      <a href="mailto:luisd824@gmail.com" className="headerContact">
        Contact
      </a>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
