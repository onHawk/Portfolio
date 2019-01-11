import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'
import About from '../components/about'
import Projects from '../components/projects'

const IndexPage = () => (
  <Layout>
    <About />
    <div className="titles">
      <h2>My Projects</h2>
    </div>
    <Projects />

    <footer>
      © {new Date().getFullYear()}
      {` `}
    </footer>
  </Layout>
)

export default IndexPage
