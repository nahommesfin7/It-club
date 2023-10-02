import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Lectures from './components/Lectures'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const container = () => {
  return (
    <div className='bg-background text-text font-poppins'>
        <Header />
        <HeroSection />
        <About />
        <FAQ/>
        <Footer />
    </div>
  )
}

export default container