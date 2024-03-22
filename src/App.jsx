import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Carousels from "./components/Carousels";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Records from "./components/Records";
import Service from "./components/Service";
import Solution from "./components/Solution";
import Team from "./components/Team";
import Navbar from "./components/Navbar";

function App() {
  return (
   <div className="">
    <Navbar />
      <Hero />
      <Service />
      <About />
      <Records />
      <Solution />
      <Carousels />
      <Team />
      <Contact />
      <Footer />
   </div>
    
    
  );
}

export default App;
