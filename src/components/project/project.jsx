import React from 'react'
import { FaGithub } from 'react-icons/fa'
import './project.css'

const Project = ({
  featured,
  source,
  title,
  description,
  techStack,
  gitHubLink,
  siteLink,
  size,
}) => {
  return (
    <div className='project'>
      <img className='project-media' src={source}></img>

      <div className='project-information'>
        {featured ? (
          <h5 className='featured-project'>Featured Project</h5>
        ) : null}
        <h6 className='project-name'>{title}</h6>
        <p className='project-description'>{description}</p>
        <a href={siteLink}>{title}</a>
        {gitHubLink ? (
          <a href={gitHubLink}>
            <FaGithub size={size} />
          </a>
        ) : null}
        <h6>Tech Stack Used</h6>
        {techStack.map(tech => {
          return tech
        })}
      </div>
    </div>
  )
}

export default Project
