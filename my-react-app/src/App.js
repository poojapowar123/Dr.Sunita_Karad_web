// import React from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Footer from './components/footer/Footer';
// import HeroSection from "./components/hero_section/Herosection";
// import Home from "./components/home/Home";
// import LeadershipVision from './components/leadership_vision/LeadershipVision';
// import Academics from "./components/academics/Academics";
// import Awards from './components/carouselSection/Awards';
// import Socialevent from './components/carouselSection/Socialevent';
// import EduProJourney from './components/edu.pro.journey/EduProfJourney';
// import VisionFuture from './components/vision/VisionFuture';
// import Events from './components/events/Events';
// import EduInitiatives from './components/edu.initiatives/EduInitiatives';
// import Publication from './components/publications/Publication';
// import About from "./components/about/About";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         {/* Home / Landing Page */}
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <Home />
//               <LeadershipVision />
//               <Academics />
//               <div className="two-sections">
//                 <Awards />
//                 <Socialevent />
//               </div>
//               <EduProJourney />
//               <VisionFuture />
//               <Events />
//               <EduInitiatives />
//               <Publication />
//             </>
//           }
//         />

//         {/* Other Pages */}
//         <Route path="/about" element={<About />} />
//         <Route path="/academic" element={<Academics />} />
//         <Route path="/awards" element={<Awards />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/educational" element={<EduInitiatives />} />
//         <Route path="/publications" element={<Publication />} />
//         {/* Add more routes if needed */}
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.css';
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero_section/Herosection";
import LeadershipVision from './components/leadership_vision/LeadershipVision';
import Academics from "./components/academics/Academics";
import Awards from './components/carouselSection/Awards';
import Socialevent from './components/carouselSection/Socialevent';
import EduProJourney from './components/edu.pro.journey/EduProfJourney';
import VisionFuture from './components/vision/VisionFuture';
import Events from './components/events/Events';
import EduInitiatives from './components/edu.initiatives/EduInitiatives';
import Publication from "./components/publications/Publication";
import Footer from "./components/footer/Footer";
import CarouselSection from './components/carouselSection/CarouselSection';



// function App() {
//   return (
//     <div className="App">
//       <HeroSection />
//       <Navbar />
//       <Home />
//       <About />
//       <LeadershipVision />
//       <Academics />
//        <div className="two-sections">
//       <Awards />
//       <Socialevent/>
//     </div>
//     <EduProJourney/>
//     <VisionFuture/>
//     <Events/>
//    <EduInitiatives/>
//    <Publication/>
//    <Footer/>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <HeroSection />

      <Navbar />
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <LeadershipVision />

      <section id="academics">
        <Academics />
      </section>

    
<section id="awards">
  <Awards />
</section>

<section id="awards">
  <Socialevent/>
</section>

  
      <EduProJourney />
      <VisionFuture />

  <section id="conferences">
        <Events />
      </section>

      <EduInitiatives/>

      <section id="publications">
        <Publication />
      </section>

      <section id="contact">
        <Footer />
      </section>

    </>
  );
}

export default App;