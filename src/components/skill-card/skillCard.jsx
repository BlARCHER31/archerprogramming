import React from 'react'
import './skillCard.css'

const SkillCard = ({ icon, label }) => {
  return (
    <div className='skill-card'>
      {icon}
      <p>{label}</p>
    </div>
  )
}

export default SkillCard
