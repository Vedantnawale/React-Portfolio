import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import About from './component/about/About'
import AboutMe from './component/aboutme/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar />
   <About />
   <AboutMe />
   </>
  )
}

export default App
