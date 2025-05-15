import { useState, useEffect } from 'react';
import './VidPortfolio.scss';

const VidPortfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [videosPerView, setVideosPerView] = useState(2);

    const videos = [
        'https://www.youtube.com/embed/-6ETOtuq37o',
        'https://www.youtube.com/embed/QPb5lpO874Q',
        'https://www.youtube.com/embed/QlRpyo8TEiw',
        'https://www.youtube.com/embed/UGFCbmvk0vo'
    ];

    useEffect(() => {
        const handleResize = () => {
            setVideosPerView(window.innerWidth <= 768 ? 1 : 2);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? videos.length - videosPerView : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + videosPerView >= videos.length ? 0 : prevIndex + 1
        );
    };

    const visibleVideos = [];
    for (let i = 0; i < videosPerView; i++) {
        const videoIndex = (currentIndex + i) % videos.length;
        visibleVideos.push(videos[videoIndex]);
    }

    return (
        <div className="vid-portfolio">
            <div className="vid-title-row">
                <h2 className="vid-title">The Experience Reel</h2>
                <span className="vid-animation">
                    <lord-icon
                        src="https://cdn.lordicon.com/fyppkfnp.json"
                        trigger="loop"
                        delay="1000"
                        stroke="bold"
                        colors="primary:#000000,secondary:#fae8d2,tertiary:#fae8d2,quaternary:#cc9800"
                        style={{ width: '40px', height: '40px' }}>
                    </lord-icon>
                </span>
            </div>
            <div className="vid-container">
                <button className="carousel-arrow left" onClick={handlePrev}>
                    <lord-icon
                        src="https://cdn.lordicon.com/whtfgdfm.json"
                        trigger="loop"
                        delay="1000"
                        colors="primary:#052b05"
                        style={{ width: '35px', height: '35px' }}
                    ></lord-icon>
                </button>
                
                {visibleVideos.map((videoUrl, index) => (
                    <div key={index} className="video-wrapper">
                        <iframe
                            src={videoUrl}
                            title={`Video ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                ))}
                
                <button className="carousel-arrow right" onClick={handleNext}>
                    <lord-icon
                        src="https://cdn.lordicon.com/whtfgdfm.json"
                        trigger="loop"
                        delay="1000"
                        colors="primary:#052b05"
                        style={{ width: '35px', height: '35px' }}
                    ></lord-icon>
                </button>
            </div>
        </div>
    );
};

export default VidPortfolio;