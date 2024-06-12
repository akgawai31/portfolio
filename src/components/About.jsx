import React from "react";
import aboutMe2 from './../assets/me.jpg'
import {ABOUT_TEXT, Education} from './../contrains/index.js'

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
        <h2 className="text-3xl font-semibold mb-5 text-center justify-center">About<span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img src={aboutMe2} alt="myimage"
              className="object-cover rounded-2xl sm:w-[500px] w-[300px] sm:h-[450px] h-[250px] filter grayscale brightness-30" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                  <p className="my-2 max-w-xl py-6 text-justify leading-6">{ABOUT_TEXT}</p>
                </div>
                <div className="p-2 mx-auto">
                  <h4 className="text-center font-semibold">Education</h4>
                  <div className="my-2 max-w-[550px] mx-auto justify-center">
                    {Education.map((edu, index) => (
                      <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                          <div className="w-full lg:w-1/4">
                            <p className='mb-2 text-sm text-neutral-400 '>{edu.year}</p>
                          </div>
                          <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className='font-semibold text-neutral-200'>
                            {edu.collage}</h6>
                            <h5 className="text-purple-100 text-sm">{edu.Degree}</h5>
                            <h7 className="text-sm italic">{edu.cgpa}</h7>
                        
                          </div>
                      </div>
                      
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;