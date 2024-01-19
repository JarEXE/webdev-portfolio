import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home id="section1" className="section1" />
      <About id="section2" className="section2" />
      <Projects id="section3" className="section3" />
      <Resume id="section4" className="section4" />
      <Contact id="section5" className="section5" />
    </div>
  );
}

export default App;
