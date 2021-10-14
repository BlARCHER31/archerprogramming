import React from 'react'
import Image from '../images/profilePic.JPG'
const Hero = () => {
  return (
    <div className='hero'>
      <h1 className='developer-name'>Blake Archer</h1>
      <img src={Image} alt='Profile' className='profile-pic' />
      <h3 className='developer-title'>Full Stack Software Developer</h3>
    </div>
  )
}

export default Hero
