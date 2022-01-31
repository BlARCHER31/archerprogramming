import React from 'react'
import SkillCard from '../skill-card/skillCard'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact, FaWordpress, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'
import './skill.css'

const Skills = ({ size }) => {
  return (
    <div className='skill-stack'>
      <SkillCard icon={<FaHtml5 size={size} />} label={'HTML'} />
      <SkillCard icon={<FaCss3Alt size={size} />} label={'CSS'} />
      <SkillCard icon={<FaReact size={size} />} label={'React'} />
      <SkillCard icon={<IoLogoJavascript size={size} />} label={'JavaScript'} />
      <SkillCard icon={<DiNodejs size={size} />} label={'NodeJs'} />
      <SkillCard icon={<FaWordpress size={size} />} label={'WordPress'} />
    </div>
  )
}

export default Skills
