import React from 'react'
import { useState } from 'react'
import {UilMultiply,UilBars } from '@iconscout/react-unicons'
const Header = () => {
  const [menu,setMenu] = useState(false)  
  const handleMenu = () =>{
    setMenu(!menu)
  }
  let text = 'bg-red-900 p-5 relative text-3xl border-b uppercase after:content-[""] after:bg-gradient-to-r from-[#46d73e] to-slate-800 after:w-0 after:duration-700 after:absolute after:h-full after:top-0 after:left-0 hover:after:w-full after:z-10 duration-700 hover:text-black'
  return (
    <div id='home'  className='w-full flex p-3 pb-10 items-center border-b border-[#65afbc] '>
        <div className='flex w-full justify-center sm:justify-between px-3 items-center'>
            <h1 className='text-2xl md:text-3xl'>SSC IT club</h1>
            <ul className='hidden sm:flex gap-10 md:text-lg'>
                <a href="#home"><p>Home</p></a>
                <a href="#about"><p>About</p></a>
                <a href="#lectures"><p>Lectures</p></a>
                <a href="#registration"><p>Registration</p></a>
            </ul>
        </div>
        <div className='sm:hidden fixed right-0 bottom-0 p-2 m-2 bg-[#46d73e] rounded-full z-50'>
            {menu ?
            <UilMultiply size={30} color={'#000'} onClick={handleMenu}/> :
            <UilBars size={30} color={'#000'} onClick={handleMenu}/>
            }
            
        </div>
        <ul className={menu ? 'bg-slate-900 fixed inset-0  flex flex-col pt-10 left-[0%] duration-300': 'duration-300  flex flex-col pt-10  fixed top-0 left-[100%]'}>
            <div className='px-5 pb-10'>
                <h1 className='text-3xl text-center'>SSC IT club</h1>
            </div>
            <a className={text}href="#home"><p className='relative z-50' onClick={handleMenu}>Home</p></a>
            <a className={text}href="#about"><p className='relative z-50' onClick={handleMenu}>About</p></a>
            <a className={text}href="#lectures"><p className='relative z-50' onClick={handleMenu}>Lectures</p></a>
            <a className={text}href="#"><p className='relative z-50' onClick={handleMenu}>Registration</p></a>
            
            <div className='px-5 py-20'>
                <h1>Powerd By IT-club &copy; copyright 2023</h1>
            </div>
        </ul>
    </div>
  )
}

export default Header