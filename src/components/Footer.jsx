import React from 'react'

const Footer = () => {
  return (
    <div >
        <div className=' bg-slate-700 p-5 flex justify-between lg:px-52  gap-4 sm:text-2xl'>
            <div>
            <h1 className='text-3xl sm:text-2xl'>Contact Us</h1>
            <div className='text-lg text-black '>
                <p className='text-2xl sm:text-xl'>Want to collaborate in anyway? Email us or call</p>
                <p className='pt-2'><span className='text-color'>Email:</span> itclubssc@gmail.com</p>
                <p className='pb-2'><span className='text-color'>Phone:</span> +251938065342</p>
            </div>
            </div>

            <div>
                <h1 className='text-3xl uppercase sm:text-2xl'>Socials</h1>
                <div>
                    <ul className='text-xl flex flex-col text-black sm:text-lg'>
                        <li>*<a href="">Telegram</a></li>
                        <li>*<a href="">Instagram</a></li>
                        <li>*<a href="">Youtube</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='text-center bg-slate-900'>
            <h1>IT club SSC copyright &copy; 2023 </h1>
        </div>
    </div>
    
  )
}

export default Footer