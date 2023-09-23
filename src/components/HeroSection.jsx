import React from 'react'

const HeroSection = () => {
  return (
        <div className='p-8 pb-24 md:py-20 md:px-20 h-screen flex  flex-col justify-center lg:px-52 -mt-5'>
            <h1 className='text-4xl pb-2'>IT-Club of SSC</h1>
            <div className='flex flex-col items-center w-[90%]'>    
            <p>Welcome to the IT Club of SSC!
            The IT Club of SSC Software Solutions Club is a vibrant and enthusiastic community of tech enthusiasts and aspiring professionals who are passionate about all things related to information technology.
            </p>
            <p>
            Whether you are a seasoned programmer, a curious beginner, or simply interested in exploring the world of technology, our club provides a platform for learning, collaboration, and innovation.
            </p>
            
            </div>
            <p className='py-6 text-4xl '>Registration are open for 2023/24!</p>
            <div className='w-full '>
            <button className=' bg-[#46d73e] text-black px-5 py-3 rounded-md text-lg duration-500 hover:bg-[#a4e3a1] hover:text-white'>Register</button>
            </div>
    </div>
  )
}

export default HeroSection