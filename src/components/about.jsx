import React from 'react'
import Skills from './skills'

const AboutMe = () => {
  return (
    <div className='container'>
      <div className='about-description'>
        <h4 id='about-me' className='title'>
          About Me
        </h4>
        <p>
          My name is Blake Archer. I started studying software development in
          May of 2020 and I have taken to it very quickly. I love and am very
          passionate about coding.
        </p>
        <h4>Skills</h4>
      </div>
      <Skills size={46} />
    </div>
  )
}

export default AboutMe
