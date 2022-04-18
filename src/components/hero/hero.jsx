import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './hero.css'

const Hero = () => {
  const size = 48
  const color = '#0d6efd'
  return (
    <div className='hero'>
      <h1 className='developer-name'>Blake Archer</h1>
      <h3 className='developer-title'>Full Stack Developer</h3>
      <span>
        <a href='https://github.com/blarcher31'>
          <FaGithub size={size} color={color} />
        </a>
        <a href='https://www.linkedin.com/in/archer-blake/'>
          <FaLinkedin size={size} color={color} />
        </a>
      </span>
    </div>
  )
}

export default Hero
