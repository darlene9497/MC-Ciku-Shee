import Hero from "../../components/features/hero/Hero"
import ServicesSection from "../../components/ui/eventCard/ServicesSection"
import AboutSection from "../../components/features/about-section/AboutSection"
import ClientReviews from "../../components/features/client-reviews/ClientReviews"

function Home() {
  return (
    <>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <ClientReviews />
    </>
  )
}

export default Home