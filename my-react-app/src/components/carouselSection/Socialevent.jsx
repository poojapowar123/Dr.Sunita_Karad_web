import React from "react";
import CarouselSection from "./CarouselSection";

const socialevent = [
  {
    img: "assets/image1.jpg",
    title: "Education Change Maker 2024 by ICT Academy:",
    desc: "Recognizing her innovative approach to transforming educational"
  },
  {
    img: "assets/image2.jpg",
    title: "MSME Academia Excellence Award 2024:",
    desc: "Acknowledging her outstanding contribution to bridging the industry-academia gap."
  },
  {
    img: "assets/image3.jpg",
    title: "Neelam Gorhe Best Educationist Award 2021:",
    desc: "Neelam Gorhe Best Educationist Award 2021 by MIT ADT University."
  },
  // ...rest of your socialevent
];

const Socialevent = () => (
  <CarouselSection
    sectionTitle="Initiatives & Social Impact"
    sectionDesc=" A committed advocate for education, technology, and social welfare, Dr. Karad has been the driving force behind numerous impactful initiatives: "
    items={socialevent}
  />
);

export default Socialevent;
