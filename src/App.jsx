import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Feature from "./components/Feature";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Community from "./components/Community";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      <About />
      <Gallery />
      <Feature />
      <FAQ />
      <Contact />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
