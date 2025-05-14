import { useState } from "react";
import "./Portfolio.scss";
import PageTitle from "../../components/common/PageTitle/PageTitle";
import img1 from "../../assets/shee10.jpeg";
import img2 from "../../assets/shee11.jpeg";
import img3 from "../../assets/shee12.jpeg";
import img4 from "../../assets/shee14.jpeg";
import img5 from "../../assets/shee4.jpeg";
import img6 from "../../assets/shee8.jpeg";

const images = [img1, img2, img3, img4, img5, img6];
const Portfolio = () => {
    const [centerIdx, setCenterIdx] = useState(1);

    const prevImage = () => setCenterIdx((centerIdx - 1 + images.length) % images.length);
    const nextImage = () => setCenterIdx((centerIdx + 1) % images.length);

    const leftIdx = (centerIdx - 1 + images.length) % images.length;
    const rightIdx = (centerIdx + 1) % images.length;

    return (
        <div className="portfolio-page">
            <PageTitle title="Spotlight Moments" />
            <p className="portfolio-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis 
                lacinia mi, ac facilisis nisl egestas nec. Curabitur scelerisque, quam 
                vitae congue semper, nulla turpis mollis augue, condimentum volutpat 
                lorem sem quis odio. Sed a elit at sapien volutpat porta ut ut lectus. 
                Fusce vestibulum diam quis nibh vestibulum rutrum. Mauris a enim 
                non magna vestibulum facilisis quis nec nulla. Maecenas suscipit 
                eleifend massa. Nunc porttitor massa felis, quis iaculis ipsum cursus at.
            </p>
            <div className="memorable-moments">
                <h2 className="memorable-moments-title">Signature Moments</h2>
                <div className="memorable-moments-images" style={{ position: "relative" }}>
                    <button className="carousel-arrow left" onClick={prevImage}>
                        <lord-icon
                            src="https://cdn.lordicon.com/whtfgdfm.json"
                            trigger="loop"
                            delay="1500"
                            colors="primary:#052b05"
                            style={{ width: '35px', height: '35px', transform: 'scaleX(-1)' }}
                        ></lord-icon>
                    </button>
                    <img src={images[leftIdx]} alt="Memorable Moment Left" className="left" />
                    <img src={images[centerIdx]} alt="Memorable Moment Center" className="center" />
                    <img src={images[rightIdx]} alt="Memorable Moment Right" className="right" />
                    <button className="carousel-arrow right" onClick={nextImage}>
                        <lord-icon
                            src="https://cdn.lordicon.com/whtfgdfm.json"
                            trigger="loop"
                            delay="1500"
                            colors="primary:#052b05"
                            style={{ width: '35px', height: '35px' }}
                        ></lord-icon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;