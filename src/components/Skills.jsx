import React from 'react'
import { techs } from './../contrains/index.js'

function Skills() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 font-semibold text-center text-3xl'>Skills</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            {techs.map(({id, src, title}) => (
                <div key={id} className='rounded-2xl border-neutral-800 border-4 p-4 max-w-[100px] shadow-md hover:scale-105 duration-500 py-2'>
                    <img src={src} alt="" />
                    <p className="mt-4 text-center">{title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills