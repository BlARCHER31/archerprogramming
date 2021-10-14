import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ user }) => {
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
            <Link className='nav-link' aria-current='page' to='/prices'>
              About Me
            </Link>
            <Link className='nav-link' aria-current='page' to='/prices'>
              Projects
            </Link>
            <Link className='nav-link' aria-current='page' to='/prices'>
              Contact Me
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
