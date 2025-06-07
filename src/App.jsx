import React from 'react'
import Header from './Component/Header'
import Hero from './Component/Hero'
import Product from './Component/Product'
import Products from './Component/Products'
import Choose from './Component/Choose'
import HelpSection from './Component/HelpSection'
import Testimonial from './Component/Testimonial'
import Blog from './Component/Blog'
import Footer from './Component/Footer'
import OurProduct from './Component/OurProduct'
import About from './Component/About'

const App = () => {
  return (
    <>
      <Header />
      <div className='mt-6'>
        <Hero />
      </div>

      <Product />
      <Products />
      <OurProduct />
      <Choose />
      <div className='mt-6'>
        <HelpSection />
      </div>
      <div className='mt-6'>
        <About />

      </div>
      <Testimonial />
      <Blog />
      <Footer />
    </>
  )
}

export default App
