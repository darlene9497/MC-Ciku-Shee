import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import ServicesSection from './components/eventCard/ServicesSection'
import AboutSection from './components/about-section/AboutSection'
import ClientReviews from './components/client-reviews/ClientReviews'

function App() {
  return (
    <>
    <Navbar />
    <main style={{ paddingTop: '4em' }}>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ClientReviews />
    </main>
    </>
  )
}

export default App
