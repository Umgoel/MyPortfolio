import styles from "./App.module.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Photos from "./Photos/Photos";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Photos/*" element={<Photos />} />
          <Route path="/" element={<Home />} />
          <Route path="/Blog/*" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

const Home = () => (
  <>
    <Hero />
    <Projects />
    <Experience />
    <About />
    <Contact />
    <SpeedInsights />
  </>
);

export default App;
