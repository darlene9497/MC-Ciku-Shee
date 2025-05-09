import Navbar from './components/layout/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/layout/footer/Footer'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'

function App() {
  return (
    <>
    <Navbar />
    <main style={{ paddingTop: '4em' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
