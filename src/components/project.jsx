import React from 'react'
import video from '../video/summoner-demo.webm'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
  const size = 42
  return (
    <div className='container'>
      <h4 id='projects' className='title'>
        Project Work
      </h4>
      <div className='projects'>
        <video className='project-media' controls src={video}></video>
        <div className='project-information'>
          <h5 className='featured-project'>Featured Project</h5>
          <h6 className='projectName'>TeamFight Tactics Summoner Info</h6>
          <p className='project-description'>
            An app that allows you to type in a Summoner Name and retrieve Match
            History for your summoner from the RIOT GAMES API.
          </p>
          <a href='https://github.com/BlARCHER31/tft-match-history-ui'>
            <FaGithub size={size} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
