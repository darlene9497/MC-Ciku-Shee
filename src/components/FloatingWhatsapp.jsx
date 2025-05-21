import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    zIndex: 1000,
    padding: "5px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    opacity: 0,
    animation: "fadeIn 0.8s ease-in forwards",
    transition: "transform 0.3s ease",
};

const FloatingWhatsApp = () => {
    const location = useLocation();
    const [showButton, setShowButton] = useState(false);
    const iconRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowButton(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (location.pathname === "/contact") return null;

    return (
        <>
            <style>
                {`
                    @keyframes fadeIn {
                        to { opacity: 1; }
                    }
                `}
            </style>

            {showButton && (
                <a
                href="https://wa.me/254736456123"
                style={buttonStyle}
                title="Chat with me on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/qtenrimd.json"
                        trigger="loop"
                        delay="1500"
                        colors="primary:#cc9800,secondary:#052b05,tertiary:#000000"
                        style={{ width: "40px", height: "40px" }}
                        ref={iconRef}
                    ></lord-icon>
                </a>
            )}
        </>
    );
};

export default FloatingWhatsApp;
