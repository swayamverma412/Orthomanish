import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { About } from './components/about'
import { Services } from './components/services'
import { Testimonials } from './components/testimonials'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import './CSS/todoo.css'
import Form from './components/form';
import Advantages from './components/advantages'
import Welcomingsection from './components/DescPage'
import Features1 from './components/Featuresnew'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features1 />
      <Welcomingsection />
      <About data={landingPageData.About} />
      <Advantages />
      <Services data={landingPageData.Services} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Form />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
