import React from 'react'
import Typed from 'react-typed';
// import {BiSolidDownArrow} from '@iconscout/react-unicons'
import { BiDownArrow } from "react-icons/bi";
// import {ReactComponent as ReactLogo} from '../assets/ht7.svg'


const HeroSection = () => {
  return (
        <div className='pt-[20vh] md:pt-[21vh] p-5 text-center flex flex-col items-center text-text md:py-10'>

          <div className='p-5'>
           <h1 className='text-5xl uppercase text-text'>
            IT club of SSC
           </h1>
          </div>

          <div className='md:w-[50%] flex flex-col items-center'>
          <div className='relative flex flex-col justify-center items-center after:content-["↘️"] after:text-xl after:top-0  after:absolute after:-left-7  m-5 rounded-md border text-justify border-secondary p-5'>    

              <p>Welcome to IT club, the premier destination for SSC high school students interested in IT. Our mission is to provide a supportive and engaging community for students to learn, grow, and develop their skills in IT. 
              </p>

              </div>
              <div className='relative flex flex-col justify-center items-center after:content-["↘️"] after:text-xl after:top-0  after:absolute after:-left-7  m-5 rounded-md border  border-secondary text-justify p-5 '>
                <p>
                Throughout the year, we organize a variety of events and activities to help our members succeed, including coding challenges, workshops, and mentorship programs. Join us today and become part of a vibrant and supportive community of SSC high school students passionate about IT.
                </p>
      
              </div>
              <div className='relative flex flex-col justify-center items-center after:content-["↘️"] after:text-xl after:top-0  after:absolute after:-left-7  m-5 rounded-md border border-secondary text-justify p-5 '>
                <p>
                Together, we can make a difference in the world and shape the future of technology.
                </p>
      
              </div>

          </div>
            
            <div className='p-10 flex flex-col items-center'>
                <BiDownArrow size={50} className='animate-pulse' />
                <p className='text-gray-500'>Scroll</p>
            </div>

           <div>
            
           </div>


    </div>
  )
}

export default HeroSection