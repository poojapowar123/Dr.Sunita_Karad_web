import React, { useState, useEffect } from "react";
import "./CarouselSection.css";

const CarouselSection = ({ sectionTitle, sectionDesc, items }) => {
    const [current, setCurrent] = useState(0);

    
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % (items?.length || 1));
  };

  // Auto scroll every 1 seconds
  useEffect(() => {
    if (!items || items.length === 0) return; // safe exit inside effect

    const interval = setInterval(() => {
      nextSlide();
    }, 1000);

    return () => clearInterval(interval);
  }, [items?.length]);

  //check for empty items after hooks
  if (!items || items.length === 0) {
    return <p>No data available</p>;
  }


    return (
        <div className="carousel-section">
            <h1>{sectionTitle}</h1>
            <p>{sectionDesc}</p>

            <div className="carousel-container">
                {/*                
                <button className="arrow left" onClick={prevSlide}>❮</button> */}

                {/* Card */}
                <div className="carousel-card">
                    <img src={items[current].img} alt="carousel-item" />
                    <div className="carousel-text">
                        {items[current].title && <h5>{items[current].title}</h5>}
                        {items[current].desc && <p>{items[current].desc}</p>}
                    </div>
                </div>

                {/* Right Arrow
                <button className="arrow right" onClick={nextSlide}>❯</button> */}

            </div>

            {/* Dots */}
            <div className="dots">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === current ? "active" : ""}`}
                        onClick={() => setCurrent(index)}   //jump to clicked card
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CarouselSection;
