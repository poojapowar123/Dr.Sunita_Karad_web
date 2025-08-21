import React from "react";
import CarouselSection from "../carouselSection/CarouselSection";
import "./CarouselSection.css";

const awards = [
 {
            img: "assets/image1.jpg",
            title: "Education Change Maker 2024 by ICT Academy:",
            desc: "Recognizing her innovative approach to transforming educational"
        },
        {
            img: "assets/image2.jpg",
            title: "MSME Academia Excellence Award 2024:",
            desc:"Acknowledging her outstanding contribution to bridging the industry-academia gap."
        },
        {
            img: "assets/image3.jpg",
            title: "Neelam Gorhe Best Educationist Award 2021:",
            desc:"Neelam Gorhe Best Educationist Award 2021 by MIT ADT University. "
        },
         {
            img: "assets/image5.jpg",
            title: "Times Power Women Award 2018:",
            desc:"Honoring her role as a change leader in the education sector."
        },
         {
            img: "assets/image6.jpg",
            title: "Best Educator Award Best Marketing Excellence Award at ASMA Conclave 2019:  Innovation in Teaching",
        desc:"Recognizing her efforts to market educational initiatives in creative and effective ways. "
        },
         {
            img: "assets/image9.jpg",
            title: "India Maritime Icon 2024 by MAREX media Pvt. Limited"
        },
         {
            img: "assets/image7.jpg",
            title: "Best Educator Award for Innovation in DIFT Foundation and Defence Force League award 2025 Hindustan Pride award for the Educational Excellence "
        },
         {
            img: "assets/image7.jpg",
            title: " Marathwada Bhushan Puraskar (2024)"
        }, {
            img: "assets/image7.jpg",
            title: "Best Educator Award Durga Shakti Puraskar by Durga Brigade Sanghtana "
        },
         {
            img: "assets/image7.jpg",
            title: "DIFT Foundation DFL AWARDS as a Women Empowerment Award"
        },
         {
            img: "assets/image3.jpg",
            desc: "Best Educator Award Honorary Doctorate by the Honorary doctorate Award council and University of Commonwealth, Tonga"
        },
         {
            img: "assets/image7.jpg",
            title: "Honorary Doctorate Award by the World Human right commission"
        }, {
            img: "assets/image7.jpg",
            title: "PHD form The Saint Gadge Baba Amrawati University"
        },
];

const Awards = () => (
  <CarouselSection
    sectionTitle="Celebrating Excellence - Awards And Recognitions"
    sectionDesc="Dr. Sunita Karad has received multiple prestigious awards for her contributions to education and social welfare:"
    items={awards}
  />
);

export default Awards;