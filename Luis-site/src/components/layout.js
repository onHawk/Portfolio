import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import '../sass/layout.scss'
import '../sass/main.scss'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="landing">
          <Header siteTitle={data.site.siteMetadata.title} />
        </div>
        <div
          style={{
            width: '90%',
            margin: '0 auto',
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
