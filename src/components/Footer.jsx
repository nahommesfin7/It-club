import React from 'react'

const Footer = () => {
  return (
    <div id='contactus' className=' bg-secondary px-5 pt-5 px-10' >
        <div className='md:flex md:gap-10 md:justify-between'>
            <div className='w-full flex-2'>
                <h1 className='py-2 text-4xl uppercase md:text-5xl'>Contact Us</h1>
                <p className='px-2 py-2'>We would love to collaborate and do projects together. <br/> We work on Frontend projects using popular frameworks and also Backends.</p>
            </div>
            <div className='p-3 my-10 text-md w-full flex-2'>
                <ul>
                    <li>Email  <a href=""><code className='text-accent'>itclubscc@gmail.com</code></a></li>
                    <li>Telegram  <a href=""><code className='text-accent'>itclubssc</code></a></li>
                    <li>Instagram  <a href=""><code className='text-accent'>itclubssc</code></a></li>
                    <li>Phone  <a href=""><code className='text-accent'>+251938065342</code></a></li>
                </ul>
            </div>
        </div>
        <div className='text-center py-2'>
                <h1>Powerd By IT-club &copy; copyright 2023</h1>
        </div>

    </div>
    
  )
}

export default Footer
    {/* <div className=' bg-slate-700 p-5 flex justify-between lg:px-52  gap-4 sm:text-2xl'>
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
    </div> */}