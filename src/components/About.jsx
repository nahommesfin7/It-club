import React from 'react'

const About = () => {
    return (
        <div id='about' className='pb-10'>
            <div className='md:h-screen'>
                <div className='pl-4'>
                    <h1 className='text-4xl'>About us</h1>
                    <hr />
                </div>
                <div className='py-5 flex flex-col gap-2 text-center items-center'>
                    <div className='w-[80%] md:py-10'>
                    <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor reprehenderit enim minus suscipit quaerat eum, maiores laborum quos, id repellendus atque illum ut deserunt, aliquid dignissimos. Magni, sequi! Amet? dolor sit amet consectetur adipisicing elit. Veniam nemo odio exercitationem facere ex asperiores magnam, est accusamus porro quod?</p>
                    <p>...</p>
                    <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor reprehenderit enim minus suscipit quaerat eum, maiores laborum quos, id repellendus atque illum ut deserunt, aliquid dignissimos. Magni, sequi! Amet? dolor sit amet consectetur adipisicing elit. Veniam nemo odio exercitationem facere ex asperiores magnam, est accusamus porro quod?</p>

                    <p>...</p>
                    <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor reprehenderit enim minus suscipit quaerat eum, maiores laborum quos, id repellendus atque illum ut deserunt, aliquid dignissimos. Magni, sequi! Amet? dolor sit amet consectetur adipisicing elit. Veniam nemo odio exercitationem facere ex asperiores magnam, est accusamus porro quod?</p>

                    <p>...</p>
                    <p>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor reprehenderit enim minus suscipit quaerat eum, maiores laborum quos, id repellendus atque illum ut deserunt, aliquid dignissimos. Magni, sequi! Amet? dolor sit amet consectetur adipisicing elit. Veniam nemo odio exercitationem facere ex asperiores magnam, est accusamus porro quod?</p>
                    </div>
            </div>
        </div>
        <div className='flex items-center flex-col'>
            <h1 className='text-center text-4xl font-bold md:pb-12'>We Teach</h1>
            <div className='grid grid-cols-2 w-full lg:w-[50%]'>
                <p className='lg:text-xl  text-center bg-slate-700 m-2 rounded-sm py-5 hover:bg-slate-500 hover:text-[#0f200e] duration-200'>Phyton</p>
                <p className='lg:text-xl  text-center bg-slate-700 m-2 rounded-sm py-5 hover:bg-slate-500 hover:text-[#0f200e] duration-200'>Data Structure</p>
                <p className='lg:text-xl  text-center bg-slate-700 m-2 rounded-sm py-5 hover:bg-slate-500 hover:text-[#0f200e] duration-200'>Algoritms</p>
            </div>
        </div>
    </div>
  )
}

export default About