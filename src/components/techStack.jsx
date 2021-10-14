import React from 'react'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact, FaWordpress } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'

const TechStack = () => {
  return (
    <div className='tech-stack'>
      <div className='tech-card'>
        <i className='fa fa-html5 fa-4x'></i>
        <caption>HTML</caption>
      </div>
      <div className='tech-card'>
        <i className='fa fa-css3 fa-4x'></i>
        <caption>CSS</caption>
      </div>
      <div className='tech-card'>
        <IoLogoJavascript size={56} />
        <caption>Javascript</caption>
      </div>
      <div className='tech-card'>
        <FaReact size={56} />
        <caption>React</caption>
      </div>
      <div className='tech-card'>
        <DiNodejs size={56} />
        <caption>NodeJs</caption>
      </div>
      <div className='tech-card'>
        <FaWordpress size={56} />
        <caption>WordPress</caption>
      </div>
    </div>
  )
}

export default TechStack
