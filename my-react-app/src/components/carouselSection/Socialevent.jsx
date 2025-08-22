import React from "react";
import CarouselSection from "./CarouselSection";
import "./CarouselSection.css";

const socialevent = [
  {
    img: "assets/i5.jpg",
    title: "Tree Plantation Drive 2023",
    desc: "Leading the 'Kalpavriksha' initiative to foster environmental sustainability along the Sant Dnyaneshwar Palkhi Marg."
  },
  {
    img: "assets/i2.jpg",
    title: "Establishment of Prestigious Chairs: ",
    desc: "Founded several chairs such as the Dr. Vijay Bhatkar Chair and CK Prahlada Chair, Dr Raghunath Mashalkar Chair to advance academic research and thought leadership"
  },
  {
    img: "assets/i1.jpg",
    title: "Gender Equality & Recognition: ",
    desc: "Launched Women’s Day Awards at MIT ADT University, celebrating the achievements of women in diverse fields since 2017."
  },
  {
    img: "assets/i3.jpg",
    title: "Engineer's Day Award",
    desc: "Launched Engineer's Day Award at MIT ADTU to Recognizes outstanding contributions and talent in the field of engineering. "
  },
  {
    img: "assets/i7.jpg",
    title: "Start-Up Awards: ",
    desc: "Initiated Start-Up Awards at MIT ADTU to Celebrates and promotes innovative entrepreneurial ventures and achievements."
  },
  {
    img: "assets/i8.jpg",
    title: "Abhivruddhi Journal: ",
    desc: "Initiated 'Abhivruddhi,' an esteemed annual journal fostering innovation and knowledge across diverse disciplines. Dedicated to promoting intellectual growth and scholarly excellence at MIT ADT University."
  },
  {
    img: "assets/image3.jpg",
    title: "National Conference: ",
    desc: "Started Nation conference on Innovative Global Trends in Art, Design, Technology, Management, Vedic Science, Education, Architecture, Film & Media. "
  },
  {
    img: "assets/i4.jpg",
    title: "Running the University level CRC club and MOU signing for more than 100 + corporate organisations "
  },
  {
    img: "assets/image3.jpg",
    title: "Establishment of Amazon Centre of Excellence, Skill Builder "
  },
  {
    img: "assets/image3.jpg",
    title: "Establishment of Salesforces Centre of Excellence "
  },
  {
    img: "assets/i4.jpg",
    title: "Coursera across the campus "
  }
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
