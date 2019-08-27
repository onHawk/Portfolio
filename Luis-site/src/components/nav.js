import React from 'react'

import '../sass/nav.scss'

const Nav = () => {
  return (
    <div className="bar">
      <ul className="nav">
        <a className="nav-i" href="#about">
          <li className="nav-anim">About</li>
        </a>

        <a className="nav-i" href="#projects">
          <li className="nav-anim">Portfolio</li>
        </a>

        <a className="nav-i" href="#contact">
          <li className="nav-anim">Contact</li>
        </a>

        <a
          href="https://drive.google.com/file/d/18NctLXLu8ybIk-WlY1Dns_1uQGOzie7W/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-i"
        >
          <li className="nav-anim">Resume</li>
        </a>
      </ul>
    </div>
  )
}

export default Nav
