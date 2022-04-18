import React from 'react'
import { BsCodeSlash, BsFillBriefcaseFill } from 'react-icons/bs'
import { SiAboutdotme } from 'react-icons/si'
import { RiContactsLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark navbar-nav-scroll'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Archer Programming
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse ' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <a className='nav-link' aria-current='page' href='#about-me'>
              <SiAboutdotme />
            </a>
            <a className='nav-link' aria-current='page' href='#skills'>
              <BsCodeSlash />
            </a>
            <a className='nav-link' aria-current='page' href='#projects'>
              <BsFillBriefcaseFill />
            </a>
            <a className='nav-link' aria-current='page' href='#contact'>
              <RiContactsLine />
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
