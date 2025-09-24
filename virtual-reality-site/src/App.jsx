import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/hero'
import FeatureSec from './components/Feature'
import CodingFlowSec from './components/CodingflowSec'
import Pricing from './components/price'
import TestimonialsSec from './components/testimonials'
import Footer from './components/footer'


function App() {

  return (
    <>
    <Navbar />
    <HeroSection />
    <FeatureSec />
    <CodingFlowSec />
    <Pricing />
    <TestimonialsSec />
    <Footer />
    </>
  )
}

export default App
