import React from 'react'
import SkillCard from '../skill-card/skillCard'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact, FaWordpress, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'
import './skill.css'
import { SiMysql, SiMongodb } from 'react-icons/si'

const Skills = () => {
  const size = 46
  return (
    <div>
      <h3 className='title' id='skills'>
        Skills
      </h3>
      <div className='skill-stack'>
        <SkillCard icon={<FaReact size={size} />} label={'React'} />
        <SkillCard
          icon={<IoLogoJavascript size={size} />}
          label={'JavaScript'}
        />
        <SkillCard icon={<DiNodejs size={size} />} label={'NodeJs'} />
        <SkillCard icon={<SiMysql size={size} />} label={'MySql'} />
        <SkillCard icon={<SiMongodb size={size} />} label={'MongoDB'} />
        <SkillCard icon={<FaHtml5 size={size} />} label={'HTML'} />
        <SkillCard icon={<FaCss3Alt size={size} />} label={'CSS'} />
        <SkillCard icon={<FaWordpress size={size} />} label={'WordPress'} />
      </div>
    </div>
  )
}

export default Skills
