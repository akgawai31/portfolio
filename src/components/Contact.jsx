import React from 'react'
import { CONTACT } from '../contrains'

function Contact() {
  return (
    <div className='border-b border-neutral-800 pb-20 '>
        <h2 className='my-10 text-center font-semibold text-3xl'>Get in Touch</h2>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#" className='border-b'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact