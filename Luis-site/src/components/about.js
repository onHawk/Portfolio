import React from 'react'

import '../sass/about.scss'

// import { Container } from 'reactstrap'

const About = () => {
  return (
    <div id="about" className="sections">
      <div className="titles">
        <h2>About me</h2>
      </div>
      <div id="me" />
      <div className="text_container">
        <p>
          I am a Fullstack Engineer passionate about all aspects of web and
          mobile development. My core experience is in React, node.js and
          MongoDB.
          <br />
          <br />
          I also have experience working on both iOS and Android apps using
          React Native. I am always striving to learn more about software
          development best practices and apply them to building best-in-class
          software.
          <br />
          <br />
          When I'm not at my computer, I like to spend my time with my dog, take
          hikes and relax with music to clear my mind.
        </p>
      </div>
    </div>
  )
}

export default About
