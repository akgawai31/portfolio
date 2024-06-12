import {React, useState} from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'

function Navbar() {
  const links = [
    {
      id: 1,
      child: (
        <>
          <AiFillLinkedin />
        </>
      ),
      href: "https://www.linkedin.com/in/akshay-gawai-6b24b3203/",
    },
    {
      id: 2,
      child: (
        <>
          <AiFillGithub />
        </>
      ),
      href: "https://github.com/akgawai31",
    },
    {
      id: 3,
      child: (
        <>
        <AiFillInstagram />
        </>
      ),
      href: "https://www.instagram.com/akgawai31/",
    },
  ];
  return (
    <nav className=' mb-20 flex items-center justify-between py-2'>
      <div className='flex flex-shrink-0 items-center'>
          <h1 className='mx-2 w-10 text-2xl font-bold'>Akshay</h1>
      </div>
      <div  className='flex m-8 items-center justify-center gap-4 text-2xl'>
      {links.map(({id, child, href}) => (
            <a key={id} href={href}>{child}</a>
      ))}
       </div>
    </nav>
  )
}

export default Navbar