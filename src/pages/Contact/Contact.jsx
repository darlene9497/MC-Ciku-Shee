import './Contact.scss'
import contactImage from '../../assets/shee9.jpeg'
import { FaLinkedin, FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from 'react-icons/fa'
import ContactForm from '../../components/features/contact-form/ContactForm'
import PageTitle from '../../components/common/PageTitle/PageTitle'
function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <PageTitle title="Get in Touch" />
                <p>
                    Kindly fill-out this form and I will get back to you right away!
                    <br />
                    For bookings please contact me through the form. When I get back to you, I will answer any questions you may have and start the process of determining if we are the right fit for each other.
                    <br />
                    There is absolutely no obligation until we chat and decide that we are the right fit. I greatly look forward to meeting with you!
                </p>
                <div className="contact-image">
                    <img src={contactImage} alt="contact image" />
                </div>
                <div className="contact-info">
                    <lord-icon
                        src="https://cdn.lordicon.com/xmoniccu.json"
                        trigger="loop"
                        colors="primary:#cc9800,secondary:#052b05"
                        style={{width: "30px", height: "30px"}}
                    />
                    <p>
                        <span>Nairobi, Kenya</span>
                        <span>Available for travel</span>
                    </p>
                    <p>
                        <span>+254 712 345 678</span>
                        <span>wanjikushee@gmail.com</span>
                    </p>
                </div>
                <div className="contact-social-icons">
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTiktok /></a>
                    <a href="#"><FaEnvelope /></a>
                </div>
            </div>

            <div className="contact-form">
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact