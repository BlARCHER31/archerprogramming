import React from 'react'
import Skills from '../skill/skills'
import './about.css'

const AboutMe = () => {
  return (
    <div className='about'>
      <div className='container'>
        <h4 id='about-me' className='title'>
          About Me
        </h4>
        <p>
          My name is Blake Archer. I started studying software development in
          May of 2020 and I have taken to it very quickly. I love and am very
          passionate about coding. As a self taught and directed developer, I
          have become dedicated to learning and being the best developer I can
          be. In an industry that is ever evolving I understand that I must be
          as well. I try to dive deep into different technical podcasts and
          technical books to help me with that. <br />
        </p>
        <h4>Tech Skills</h4>
        <Skills size={46} />
      </div>
    </div>
  )
}

export default AboutMe
