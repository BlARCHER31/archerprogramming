import React from 'react'
import { BsCodeSlash, BsFillBriefcaseFill } from 'react-icons/bs'
import { SiAboutdotme } from 'react-icons/si'
import { RiContactsLine } from 'react-icons/ri'
import './nav.css'

const NavBar = () => {
  const size = 20
  return (
    <nav>
      <ul className='nav'>
        <a className='nav-item' aria-current='page' href='#about-me'>
          <SiAboutdotme size={size} />
          <p className='nav-hidden'>About Me</p>
        </a>

        <a className='nav-item' aria-current='page' href='#skills'>
          <BsCodeSlash size={size} />
          <p className='nav-hidden'>Skills</p>
        </a>
        <a className='nav-item' aria-current='page' href='#projects'>
          <BsFillBriefcaseFill size={size} />
          <p className='nav-hidden'>My Projects</p>
        </a>
        <a className='nav-item' aria-current='page' href='#contact'>
          <RiContactsLine size={size} />
          <p className='nav-hidden'>Contact Me</p>
        </a>
      </ul>
    </nav>
  )
}

export default NavBar
