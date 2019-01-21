import React from 'react'

import '../sass/nav.scss'

const Nav = () => {
  return (
    <div className="bar">
      <ul className="nav">
        <li className="nav-i">
          <a href="#about">About</a>
        </li>

        <li className="nav-i">
          <a href="#projects">Portfolio</a>
        </li>

        <li className="nav-i">
          <a href="#contact">Contact</a>
        </li>

        <li className="nav-i">
          <a
            href="https://drive.google.com/file/d/1Zpx9uIAelDhT4zC6CiGXxoNY6fKvQiDs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
