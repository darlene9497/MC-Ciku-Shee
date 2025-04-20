import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import ServicesSection from './components/eventCard/ServicesSection'

function App() {
  return (
    <>
    <Navbar />
    <main style={{ paddingTop: '4em' }}>
      <Hero />
      <ServicesSection />
    </main>
    </>
  )
}

export default App
