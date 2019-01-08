import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'
import About from '../components/about'

const IndexPage = () => (
  <>
    <Layout />
    <div className="container">
      <div className="about_wall">
        <About />
      </div>
    </div>
    <footer>
      © {new Date().getFullYear()}
      {` `}
    </footer>
  </>
)

export default IndexPage
