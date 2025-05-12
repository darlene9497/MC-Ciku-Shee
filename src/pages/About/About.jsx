import AboutHero from "../../components/features/about-hero/AboutHero";
import "./About.scss";
import ClientsSection from "../../components/features/clients-section/ClientsSection";
const About = () => {
  return (
    <>
        <AboutHero />
        <ClientsSection />
        <div className="about-content">
          <h2>I can’t remember a time when I wasn’t leading the room</h2>
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
        </div>
    </>
  );
};

export default About;