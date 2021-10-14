import React from 'react'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact, FaWordpress, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'

const Skills = ({ size }) => {
  return (
    <div className='skill-stack'>
      <div className='skill-card'>
        <FaHtml5 size={size} />
        <p>HTML</p>
      </div>
      <div className='skill-card'>
        <FaCss3Alt size={size} />
        <p>CSS</p>
      </div>
      <div className='skill-card'>
        <FaReact size={size} />
        <p>React</p>
      </div>
      <div className='skill-card'>
        <IoLogoJavascript size={size} />
        <p>Javascript</p>
      </div>
      <div className='skill-card'>
        <DiNodejs size={size} />
        <p>NodeJs</p>
      </div>
      <div className='skill-card'>
        <FaWordpress size={size} />
        <p>WordPress</p>
      </div>
    </div>
  )
}

export default Skills
