import Navbar from './components/layout/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
    <Navbar />
    <main style={{ paddingTop: '4em' }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    </>
  )
}

export default App
