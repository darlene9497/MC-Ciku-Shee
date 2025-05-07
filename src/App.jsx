import Navbar from './components/layout/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/layout/footer/Footer'

function App() {
  return (
    <>
    <Navbar />
    <main style={{ paddingTop: '4em' }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
