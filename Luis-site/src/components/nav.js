import React from 'react'

import '../sass/nav.scss'

import { IoIosFlash } from 'react-icons/io'

const Nav = props => {
  const { offSet } = props

  return (
    <div
      className="bar"
      style={
        offSet <= 0 ? null : { boxShadow: 'rgb(24, 31, 46) 0px 10px 20px -3px' }
      }
    >
      <div className="moveto">
        <a href="/">
          <IoIosFlash size="36px" />
        </a>
      </div>
      <ul className="nav">
        <a className="nav-i" href="#about">
          <li className="nav-anim" style={{ animationDelay: '0s' }}>
            About
          </li>
        </a>

        <a className="nav-i" href="#projects">
          <li className="nav-anim" style={{ animationDelay: '.1s' }}>
            Portfolio
          </li>
        </a>

        <a className="nav-i" href="#contact">
          <li className="nav-anim" style={{ animationDelay: '.2s' }}>
            Contact
          </li>
        </a>

        <a
          href="https://drive.google.com/file/d/18NctLXLu8ybIk-WlY1Dns_1uQGOzie7W/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-i"
        >
          <li className="nav-anim" style={{ animationDelay: '.3s' }}>
            Resume
          </li>
        </a>
      </ul>
    </div>
  )
}

export default Nav
