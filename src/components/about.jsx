import React from 'react'
import TechStack from './techStack'

const AboutMe = () => {
  return (
    <div className='about-me '>
      <div className='container'>
        <div className='about-description'>
          <h4>About Me</h4>
          <p>
            My name is Blake Archer. I started studying software development in
            May of 2020 and I have taken to it very quickly. I love and am very
            passionate about coding.
          </p>
          <h4>Technology Stack</h4>
        </div>
        <TechStack />
      </div>
    </div>
  )
}

export default AboutMe
