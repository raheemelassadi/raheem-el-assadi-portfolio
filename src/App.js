import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Skills from "./components/Skills";
import './app.scss'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Skills />
    </div>
  );
}

export default App;
