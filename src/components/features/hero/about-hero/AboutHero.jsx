import './AboutHero.scss';
import aboutHeroImage from '../../../../assets/shee2.jpeg';

const AboutHero = () => (
    <section className="about-hero">
        <div className="about-hero__image-container">
            <img
                src={aboutHeroImage}
                alt="Ciku(Shee) Mwangi smiling in traditional attire"
                className="about-hero__image"
            />
        </div>
        <div className="about-hero__text-box">
            <h2 className="about-hero__headline">
                I'm Ciku(Shee) Mwangi - An Entertainer, MCee, Host, and a Professional hype-woman for individuals and brands looking for a one-of-a-kind experience.
            </h2>
            <p>
                I'm based in Kenya and work with clients all across the country, bringing energy, professionalism, and seamless event flow to every occasion. Whether it's a corporate gathering, wedding, or special celebration, I ensure an engaging and stress-free experience for both hosts and guests.
            </p>
            <p>
                I'm also available for travel, so no matter where your event is, you can count on me to bring the perfect mix of charisma, organization, and entertainment to make it truly unforgettable
            </p>
        </div>
    </section>
);

export default AboutHero;
