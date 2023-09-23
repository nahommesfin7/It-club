import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Lectures from './components/Lectures'
import Footer from './components/Footer'

const container = () => {
  return (
    <div className='bg-slate-900 text-color font-poppins'>
        <Header />
        <HeroSection />
        <About />
        <Lectures />
        <Footer />
    </div>
  )
}

export default container