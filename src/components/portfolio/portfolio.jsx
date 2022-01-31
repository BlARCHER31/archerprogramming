import React from 'react'
import tft from './images/tft.png'
import crypto from './images/crypto.png'
import DWSHFImage from './images/DWSHF.png'
import C2K from './images/C2K.png'

import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import Project from '../project/project'
import './portfolio.css'

const Portfolio = () => {
  const normalSize = 42
  const smallSize = 24
  const cryptoDescription = `An app that allows you to get current crypto prices, add to your
  portfolio and track them.`

  const tftDescription = `An app that allows you to type in a Summoner Name and retrieve Match
  History for your summoner from the RIOT GAMES API.`

  const dwshfDescription = `Perhaps the project I am most proud of because of the meaning behind
  it. Thanks to the skills that I have picked up learning web
  development and through an internship, I was able to build and
  deploy this website for my family's non-profit from scratch using
  WordPress.`

  const c2kDefenseDesctiption = `Another WordPress website built from scratch. This was a paid
  opportunity that I was happy to do and get some real world
  experience with.`

  return (
    <div id='projects' className='portfolio'>
      <div className='container'>
        <h3 className='title'>Project Portfolio</h3>
        <Project
          featured={true}
          source={crypto}
          title={'Crypto Portfolio Tracker'}
          description={cryptoDescription}
          siteLink={'https://crypto-portfolio.archerprogramming.com/'}
          gitHubLink={`https://github.com/BlARCHER31/crypto-currency-tracker`}
          size={normalSize}
          techStack={[
            <FaReact size={smallSize} />,
            <FaNodeJs size={smallSize} />,
            <SiExpress size={smallSize} />,
            <FaHtml5 size={smallSize} />,
            <FaCss3 size={smallSize} />,
          ]}
        />
        <Project
          featured={false}
          source={tft}
          title={'TeamFight Tactics Stat Tracker'}
          description={tftDescription}
          gitHubLink={`https://github.com/BlARCHER31/tft-match-history-ui`}
          size={normalSize}
          techStack={[
            <FaReact size={smallSize} />,
            <FaNodeJs size={smallSize} />,
            <SiExpress size={smallSize} />,
            <FaHtml5 size={smallSize} />,
            <FaCss3 size={smallSize} />,
          ]}
        />
        <Project
          featured={false}
          source={DWSHFImage}
          title={'The Darren Welker Servant Heart Fund'}
          description={dwshfDescription}
          siteLink={'https://darrenwelkerservantheartfund.org/'}
          size={normalSize}
          techStack={[
            <FaWordpress size={smallSize} />,
            <FaHtml5 size={smallSize} />,
            <FaCss3 size={smallSize} />,
          ]}
        />
        <Project
          featured={false}
          source={C2K}
          title={'C2K Defense'}
          description={c2kDefenseDesctiption}
          siteLink={'https://c2kdefense.com/'}
          size={normalSize}
          techStack={[
            <FaWordpress size={smallSize} />,
            <FaHtml5 size={smallSize} />,
            <FaCss3 size={smallSize} />,
          ]}
        />
      </div>
    </div>
  )
}

export default Portfolio
