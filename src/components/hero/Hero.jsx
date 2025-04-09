import './Hero.scss'
import { useState, useEffect} from 'react'
import img1 from '../../assets/shee.jpeg'
import img2 from '../../assets/shee5.jpeg'
import img3 from '../../assets/shee6.jpeg'
import img4 from '../../assets/shee7.jpeg'

function Hero() {
    const images = [img1, img2, img3, img4]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
        }, 3000) // switch every 3 seconds

        return () => clearInterval(interval) // cleanup on unmount
    }, [images.length])

    return (
        <section className='hero-container'>
            <div className="hero-text-box">
                <h1>
                    Kenyan MC Bringing Energy & Elegance to Every Event
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam sagittis lacinia mi, ac facilisis nisl egestas nec. 
                    Curabitur scelerisque, quam vitae congue semper, nulla 
                    turpis mollis augue, condimentum volutpat lorem sem 
                    quis odio.
                </p>
                <button className="hero-btn">Book now</button>
            </div>
            <div className="hero-image">
                <img src={images[currentIndex]} alt="MC at event" />
            </div>
        </section>
    )
}

export default Hero