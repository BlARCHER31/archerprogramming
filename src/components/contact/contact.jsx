import React from 'react'
import './contact.css'
import Form from '../form/contact-form'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h3 className='title'>Contact</h3>
      <div className='grid-2x1'>
        <Form />
      </div>
    </div>
  )
}

export default Contact
