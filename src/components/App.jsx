import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Header from './Header'
import Footer from './Footer'
import About from '../pages/About'
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleReady = () => setLoading(false)

    if (document.readyState === 'complete') {
      handleReady()
    } else {
      window.addEventListener('load', handleReady)
    }

    return () => window.removeEventListener('load', handleReady)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D232A] backdrop-blur-sm">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-[#A3A3A3] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-3xl text-[#A3A3A3] font-medium">Laddar sidan...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ScrollToTop width='20' style={{ paddingLeft: '10px', borderRadius: '50%' }} smooth />
    </Router>
  )
}

export default App