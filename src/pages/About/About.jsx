import AboutHero from "../../components/features/hero/about-hero/AboutHero";
import "./About.scss";
import ClientsSection from "../../components/features/clients-section/ClientsSection";
import ICantGetEnough from "../../components/features/about-section/ICantGetEnough";

const About = () => {
  return (
    <>
      <AboutHero />
      <ClientsSection />
      <section className="about-content">
        <h2>I can't remember a time when I wasn't leading the room</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis 
          lacinia mi, ac facilisis nisl egestas nec. Curabitur scelerisque, quam 
          vitae congue semper, nulla turpis mollis augue, condimentum volutpat 
          lorem sem quis odio. Sed a elit at sapien volutpat porta ut ut lectus. 
          Fusce vestibulum diam quis nibh vestibulum rutrum. Mauris a enim 
          non magna vestibulum facilisis quis nec nulla. Maecenas suscipit 
          eleifend massa. Nunc porttitor massa felis, quis iaculis ipsum cursus at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis 
          lacinia mi, ac facilisis nisl egestas nec. Curabitur scelerisque, quam 
          vitae congue semper, nulla turpis mollis augue, condimentum volutpat 
          lorem sem quis odio. Sed a elit at sapien volutpat porta ut ut lectus. 
          Fusce vestibulum diam quis nibh vestibulum rutrum. Mauris a enim 
          non magna vestibulum facilisis quis nec nulla. Maecenas suscipit 
          eleifend massa. Nunc porttitor massa felis, quis iaculis ipsum cursus at.
        </p>
      </section>
      <section className="fast-facts-section">
        <h3 className="fast-facts-title">FAST FACTS</h3>
        <div className="fast-facts-grid">
          <div className="fast-fact">
            <span className="fast-fact-number clients">300 +</span>
            <span className="fast-fact-label">HAPPY<br />CLIENTS</span>
          </div>
          <div className="fast-fact">
            <span className="fast-fact-number trips">3</span>
            <span className="fast-fact-label">CROSS-COUNTRY<br/>ROAD TRIPS</span>
          </div>
          <div className="fast-fact">
            <span className="fast-fact-number plants">14</span>
            <span className="fast-fact-label">PLANTS ON MY BALCONY<br/>(SO FAR)</span>
          </div>
          <div className="fast-fact">
            <span className="fast-fact-number ducks">500 +</span>
            <span className="fast-fact-label">BOOKS<br/>ON MY SHELF</span>
          </div>
        </div>
      </section>
      <ICantGetEnough />
    </>
  );
};

export default About;