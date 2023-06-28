import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './app.scss'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
