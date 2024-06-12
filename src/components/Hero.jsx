import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import HeroImage from './../assets/heroImage.png'
import { HERO_CONTENT, resume } from '../contrains'

function Hero() {
  return (
    <div className='mb-20 border-b border-neutral-800 pb-4'>
        <div className='sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
            <div className='flex-col mx-auto my-auto w-[60%] justify-items-center'>
                <p className='text-gray-500 md:text-4xl sm:text-3xl text-2xl font-bold'>Hi, I'm Akshay</p>
                <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-5'>
                    <TypeAnimation 
                    sequence={[
                        "Trainee Engineer",
                        1000,
                        "Backend Devloper",
                        1000,
                        "Python Developer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <div className='flex'>
                    <p className='md:text-2xl sm:text-xl text-sm font-bold text-gray-500'>
                        with a 6 moths of Internship experience
                    </p>
                    
                </div>
                <div>
                    <p className='py-2 text-gray-500'>{HERO_CONTENT}</p>
                </div>
                <div className='relative inline-flex group my-3 sm:py-6 py-2'>
                    <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                    from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 
                    group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
                    <a href= {resume.href} download={resume.download} className='font-bold bg-blue-700 rounded-xl px-8 py-4 relative inline-flex items-center justify-center
                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>
                        Download CV</a>
                </div>
            </div>

            <div className='my-auto'>
                <img className='w-[300px] sm:w-[500px] mx-auto h-auto' 
                src={HeroImage} alt="My Profile" />
            </div>

        </div>
    </div>
  )
}

export default Hero