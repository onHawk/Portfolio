// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import '../sass/header.scss'

import Nav from '../components/nav'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div id="intro">
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      <p>Full-Stack Software Engineer.</p>
    </div>
    <Nav />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
