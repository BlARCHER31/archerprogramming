import React from 'react'
import rihDemo from './videos/Repurposed In Him Demo_Trim.mp4'
import cryptoDemo from './videos/crypto-portfolio-demo.mp4'
import tft from './images/tft.png'
import crypto from './images/crypto.png'
import DWSHFImage from './images/DWSHF.png'

import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaWordpress } from 'react-icons/fa'
import { SiExpress, SiMysql, SiMongodb } from 'react-icons/si'
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

  const rihDescription = `This website is currently just a basis for a future custom wooden sign business.
  My wife and her family began doing this a while back to raise money for mission trips. She plans on 
  using the skills she has picked up along the way to open her own business. In preparation for it, I decided
  to test and show off my Full Stack capabilities. `

  return (
    <div id='projects' className='portfolio'>
      <div className='container'>
        <h3 className='title'>Project Portfolio</h3>
        <div className='featured-project-section'>
          <Project
            featured={true}
            media={
              <video className='project-media' controls>
                <source src={rihDemo} />
              </video>
            }
            title={'Ecommerce Website'}
            description={rihDescription}
            siteLink={'https://rih.archerprogramming.com/'}
            gitHubLink={`https://github.com/BlARCHER31/dev-website-frontend`}
            size={normalSize}
            techStack={[
              <FaReact size={smallSize} />,
              <FaNodeJs size={smallSize} />,
              <SiExpress size={smallSize} />,
              <FaHtml5 size={smallSize} />,
              <FaCss3 size={smallSize} />,
              <SiMysql size={smallSize} />,
            ]}
          />
        </div>
        <Project
          featured={false}
          media={
            <video className='project-media' controls>
              <source src={cryptoDemo} />
            </video>
          }
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
            <SiMongodb size={smallSize} />,
          ]}
        />
        <Project
          featured={false}
          media={<img className='project-media' src={tft}></img>}
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
          media={<img className='project-media' src={DWSHFImage}></img>}
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
      </div>
    </div>
  )
}

export default Portfolio
