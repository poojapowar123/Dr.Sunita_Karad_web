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



function App() {
  return (
    <div className="App">
      <HeroSection />
      <Navbar />
      <Home />
      <About />
      <LeadershipVision />
      <Academics />
       <div className="two-sections">
      <Awards />
      <Socialevent/>
    </div>
    <EduProJourney/>
    <VisionFuture/>
    <Events/>
   <EduInitiatives/>
   <Publication/>
    </div>
  );
}

export default App;
