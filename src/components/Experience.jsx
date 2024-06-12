import React from 'react'
import {EXPERIENCES} from './../contrains/index.js'

function Experience() {
  return (
    <div className='border-b border-neutral-800 pb-4 '>
        <h2 className='my-20 text-center font-semibold text-3xl'>Experience</h2>
        <div className='sm:w-full w-[300px] mx-auto justify-center'>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className="w-full lg:w-1/4">
                        <p className='mb-2 text-sm text-neutral-400 '>{experience.year}</p>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold text-neutral-200'>
                            {experience.role} - <span className='text-purple-100 text-sm'>{experience.company}</span>
                        </h6>
                        <p className='mb-4 text-neutral-400 text-justify'>{experience.description}</p>
                        <div>
                        {experience.technologies.map((tech, i) => (
                            <span key={i} className='mr-2 mt-3 text-sm rounded bg-neutral-900 py-2 px-2 font-medium text-purple-800 inline-block'>{tech}</span>
                        ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience