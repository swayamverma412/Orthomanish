import { useState, useEffect } from 'react'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import Formtest from './components/formtest'

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
        <Formtest/>
    </div>
  )
}

export default App
