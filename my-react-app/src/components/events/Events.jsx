import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Events.css";

const cards = [
  {
    img: "assets/event1.jpg",
    title: "Global Education Summit",
    desc: "Brought together leaders in academia, industry, and government to discuss future-ready education systems."
  },
  {
    img: "assets/event2.jpg",
    title: "Innovation in Teaching",
    desc: "Organized workshops promoting innovative teaching methodologies blending technology and values."
  },
  {
    img: "assets/event3.jpg",
    title: "International Research Meet",
    desc: "Facilitated collaboration between universities worldwide, encouraging interdisciplinary research and networking."
  },
  {
    img: "assets/event4.jpg",
    title: "Student Leadership Conclave",
    desc: "Inspired thousands of students to pursue leadership, innovation, and global impact in their academic journey."
  }
];

const Events = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="events-container">
      <h2 className="events-title">Fostering Knowledge and Collaboration</h2>
      <p className="events-desc">
        Prof. Dr. Sunita M Karad is not only a renowned academic but also a dynamic organizer of conferences and events that bring together the brightest minds in the field. Her efforts in organizing these platforms have significantly contributed to the exchange of ideas, research, and collaboration.
      </p>

      <div className="events-wrapper">
        <button className="arrow left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>

        <div className="events-scroll" ref={scrollRef}>
          {cards.map((card, index) => (
            <div className="events-card" key={index}>
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Events;
