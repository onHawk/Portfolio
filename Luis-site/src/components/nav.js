import React from 'react'

import '../sass/nav.scss'

const Nav = () => {
  return (
    <div className="bar">
      <ul className="nav">
        <a className="nav-i" href="#about">
          <li>About</li>
        </a>

        <a className="nav-i" href="#projects">
          <li>Portfolio</li>
        </a>

        <a className="nav-i" href="#contact">
          <li>Contact</li>
        </a>

        <a
          href="https://drive.google.com/file/d/1hC5dVPQybFsrztVu0Z08WJvRi14LW_d_/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-i"
        >
          <li>Resume</li>
        </a>
      </ul>
    </div>
  )
}

export default Nav
