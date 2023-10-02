import React from 'react'
import { useState } from 'react'
import {UilMultiply,UilBars } from '@iconscout/react-unicons'
const Header = () => {

  const [menu,setMenu] = useState(false)  
  const handleMenu = () =>{
    setMenu(!menu)
  }

  let text = 'bg-slate-900 p-5 relative text-5xl border-b uppercase after:content-[""] after:bg-gradient-to-r from-[#46d73e] to-slate-800 after:w-0 after:duration-700 after:absolute after:h-full after:top-0 after:left-0 hover:after:w-full after:z-10 duration-700 hover:text-black'

  return (
    <div id='home' className='fixed z-[100] bg-background md:px-3 w-full text-text uppercase flex p-3 mb-[3rem] sm:mb-0 items-center border-b border-[#65afbc] justify-between'>
        <div className=' p-2 m-2 bg-[#] rounded-full z-[51]'>
            {menu ?
            <UilMultiply size={30} color={'#1adbdb'} onClick={handleMenu} className='fixed'/> :
            <UilBars size={30} color={'#1adbdb'} onClick={handleMenu}/>
        }
        </div>
        <h1 className='text-2xl md:text-3xl'>IT CLUB SSC</h1>
        <button className='mx-4 bg-secondary  text-text md:px-5 md:py-3 px-3 py-2  rounded-md md:text-lg duration-500 hover:bg-[#2b6969] hover:text-white'><a target="_blank" href="https://t.me/it_club_ssc_bot">Register</a></button>


        <ul className={menu ? 'bg-slate-900 fixed inset-0 z-50 flex flex-col pt-10 left-[0%] duration-300': 'duration-300  flex flex-col pt-10  fixed top-0 left-[100%]'}>
            <div className='px-5 pb-10'>
                <h1 className='text-3xl text-center'>IT CLUB SSC</h1>
            </div>
            <a className={text}href="#home"><p className='relative z-50 mx-7' onClick={handleMenu}>Home</p></a>
            <a className={text}href="#about"><p className='relative z-50 mx-7' onClick={handleMenu}>About</p></a>
            <a className={text}href="#FAQ"><p className='relative z-50 mx-7' onClick={handleMenu}>FAQ</p></a>
            <a className={text}href="#contactus"><p className='relative z-50 mx-7' onClick={handleMenu}>Contact Us</p></a>
            
            <div className='px-5 py-20'>
                <h1>Powerd By IT-club &copy; copyright 2023</h1>
            </div>
        </ul>
    </div>
  )
}

export default Header