import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Header from './Header'
import Footer from './Footer'
import About from '../pages/About'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
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