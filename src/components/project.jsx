import React from 'react'
import video from '../video/summoner-demo.webm'
import iosVideo from '../video/summoner-demo.mov'
import DWSHFImage from '../images/DWSHF.png'
import C2K from '../images/C2K.png'
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { AiOutlineLink } from 'react-icons/ai'

const Project = () => {
  const normalSize = 42
  const smallSize = 24
  return (
    <div className='container'>
      <h4 id='projects' className='title'>
        Project Work
      </h4>
      <div className='project-odd'>
        <video
          className='project-media'
          controls
          src={video}
          src={iosVideo}
        ></video>
        <div className='project-information'>
          <h5 className='featured-project'>Featured Project</h5>
          <h6 className='projectName'>TeamFight Tactics Summoner Info</h6>
          <p className='project-description'>
            An app that allows you to type in a Summoner Name and retrieve Match
            History for your summoner from the RIOT GAMES API.
          </p>
          <a href='https://github.com/BlARCHER31/tft-match-history-ui'>
            <FaGithub size={normalSize} />
          </a>
          <h6>Tech Stack Used</h6>
          <FaReact size={smallSize} />
          <FaNodeJs size={smallSize} />
          <SiExpress size={smallSize} />
          <FaHtml5 size={smallSize} />
          <FaCss3 size={smallSize} />
        </div>
      </div>
      <div className='project-even'>
        <div className='project-information'>
          <h6 className='projectName'>The Darren Welker Servant Heart Fund</h6>
          <p className='project-description'>
            Perhaps the project I am most proud of because of the meaning behind
            it. Thanks to the skills that I have picked up learning web
            development and through an internship, I was able to build and
            deploy this website for my family's non-profit from scratch using
            WordPress.
          </p>
          <a href='https://darrenwelkerservantheartfund.org/'>
            <AiOutlineLink size={normalSize} />
          </a>
          <h6>Tech Stack Used</h6>
          <FaWordpress size={smallSize} />
          <FaHtml5 size={smallSize} />
          <FaCss3 size={smallSize} />
        </div>
        <img className='project-media' src={DWSHFImage}></img>
      </div>
      <div className='project-odd'>
        <img className='project-media' src={C2K}></img>
        <div className='project-information'>
          <h6 className='projectName'>C2K Defense</h6>
          <p className='project-description'>
            Another WordPress website built from scratch. This was a paid
            opportunity that I was happy to do and get some real world
            experience with.
          </p>
          <a href='https://c2kdefense.com/'>
            <AiOutlineLink size={normalSize} />
          </a>
          <h6>Tech Stack Used</h6>
          <FaWordpress size={smallSize} />
          <FaHtml5 size={smallSize} />
          <FaCss3 size={smallSize} />
        </div>
      </div>
    </div>
  )
}

export default Project
