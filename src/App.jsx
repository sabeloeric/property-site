import React from 'react'
import Navigation from './Navigation'
import HeaderForm from './HeaderForm'
import TextContent from './TextContent'
import PropertySlider from './PropertySlider'
import AboutUsCards from './AboutUsCards'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeaderForm />
      <TextContent />
      <PropertySlider />
      <AboutUsCards />
      <Footer />
    </div>
  )
}

export default App
