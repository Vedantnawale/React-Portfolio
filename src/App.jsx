import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import About from './component/about/About'
import AboutMe from './component/aboutme/AboutMe'
import Internships from './component/internships/Internships'
import Projects from './component/projects/Projects'
import ContactUs from './component/contact/ContactUs'
import MoreProject from './component/projects/MoreProject'
import Skills from './component/skills/Skills'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
  }, []);

  if (loading) {
      return (
          <div className="flex items-center justify-center h-screen bg-base-100">
              <div className="flex flex-col items-center">
                  <span className="loading loading-spinner loading-lg text-indigo-600"></span>
                  <p className="mt-4 text-lg font-medium text-gray-700">You Are Entering The Vedant's Portfolio 😎....</p>
              </div>
          </div>
      );
  }

  return (
   <>
   <Navbar />
   <About />
   <AboutMe />
   <Skills />
   <Projects />
   <Internships />
   <ContactUs />
   </>
  )
}

export default App
