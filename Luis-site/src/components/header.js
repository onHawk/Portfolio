// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import '../sass/header.scss'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div id="intro">
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      <p style={{ color: '#f0f0f0', margin: '1rem 0' }}>
        Full-Stack Software Engineer.
      </p>
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
