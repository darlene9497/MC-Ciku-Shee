import './PortfolioGrid.scss';
import image1 from '../../../assets/shee.jpeg';
import image2 from '../../../assets/shee4.jpeg';
import image3 from '../../../assets/shee5.jpeg';
import image4 from '../../../assets/shee6.jpeg';
import image5 from '../../../assets/shee7.jpeg';
import image6 from '../../../assets/shee8.jpeg';
import image7 from '../../../assets/shee3.jpeg';
import image8 from '../../../assets/shee10.jpeg';
import image9 from '../../../assets/shee11.jpeg';
import image10 from '../../../assets/shee12.jpeg';
import image11 from '../../../assets/shee14.jpeg';
import image12 from '../../../assets/shee15.jpeg';
import image13 from '../../../assets/shee2.jpeg';
const PortfolioGrid = () => {
    return (
        <section className="portfolio-grid">
            <h2 className="gallery-title">Photo Gallery</h2>
            <div className="gallery-grid">
                <img src={image1} alt="Gallery 1" className="gallery-item" />
                <img src={image2} alt="Gallery 2" className="gallery-item" />
                <img src={image3} alt="Gallery 3" className="gallery-item" />
                <img src={image4} alt="Gallery 4" className="gallery-item" />
                <img src={image5} alt="Gallery 5" className="gallery-item" />
                <img src={image6} alt="Gallery 6" className="gallery-item" />
                <img src={image7} alt="Gallery 7" className="gallery-item" />
                <img src={image8} alt="Gallery 8" className="gallery-item" />
                <img src={image9} alt="Gallery 9" className="gallery-item" />
                <img src={image10} alt="Gallery 10" className="gallery-item" />
                <img src={image11} alt="Gallery 11" className="gallery-item" />
                <img src={image12} alt="Gallery 12" className="gallery-item" />
                <img src={image13} alt="Gallery 13" className="gallery-item" />
            </div>
        </section>
    )
}

export default PortfolioGrid;