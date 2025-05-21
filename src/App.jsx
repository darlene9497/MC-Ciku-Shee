import Navbar from './components/layout/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/layout/footer/Footer'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Portfolio from './pages/Portfolio/Portfolio'
import ScrollToTop from './components/ScrollToTop'
import FloatingWhatsApp from './components/FloatingWhatsapp'

function App() {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <main style={{ paddingTop: '5em' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </main>
    <Footer />
    <FloatingWhatsApp />
    </>
  )
}

export default App
