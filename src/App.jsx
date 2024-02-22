import styles from "./App.module.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

//Add a photogrpahy page
//Blog about why running
//
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}

export default App;
