import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import AboutUs from './Components/About Us/AboutUs'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/VideoPlayer/Videoplayer'



const App = () => {

  const [playState, setPlayState] = useState(false);

  return (

    <>
      <Navbar />
      <Hero />
      <About setPlayState={setPlayState} />
      <div className='container'>
        <Title subTitle="Key Features" title="What We Offer" />
        <Programs />
        <Title subTitle="Articles" title="Read Details Here" />
        <Campus />
        <Title subTitle="About Us" title="The Team" />
        <AboutUs />
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Footer />

      </div>
      <Videoplayer playState={playState}
        setPlayState={setPlayState}
      />

    </>
  )
}

export default App
