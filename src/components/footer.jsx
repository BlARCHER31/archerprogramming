import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const size = 42
  return (
    <div className='footer'>
      <p>Created By Blake Archer</p>
      <div className='follow-me'>
        <h5>Follow Me</h5>
        <a href='https://github.com/blarcher31'>
          <FaGithub size={size} />
        </a>
        <a href='https://www.linkedin.com/in/archer-blake/'>
          <FaLinkedin size={size} />
        </a>
      </div>
    </div>
  )
}

export default Footer
