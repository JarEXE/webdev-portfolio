import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import PrintAnywhereDetails from "./components/PrintAnywhereDetails";
import AnilookupDetails from "./components/AniLookupDetails";
import GameWarpDetails from "./components/GameWarpDetails";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SmartFormsDetails from "./components/SmartformsDetails";
import HandyDetails from "./components/HandyDetails";
import ErrorPage from "./components/ErrorPage";
import ParticlesBackground from "./components/ParticlesBackground";
import TurboEventsDetails from "./components/TurboEventsDetails";
import OmrManagerDetails from "./components/OmrManagerDetails";

function App() {
  return (
    <>
      <ParticlesBackground />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home id="section1" className="section1" />
                  <About id="section2" className="section2" />
                  <Projects id="section3" className="section3" />
                  <Resume id="section4" className="section4" />
                  <Contact id="section5" className="section5" />
                  <ScrollToTopButton />
                </>
              }
            />
            <Route
              path="/projects/print-anywhere"
              element={
                <>
                  <PrintAnywhereDetails /> <ScrollToTopButton />
                </>
              }
            />
            <Route
              path="/projects/anilookup"
              element={
                <>
                  <AnilookupDetails /> <ScrollToTopButton />
                </>
              }
            />
            <Route
              path="/projects/gamewarp"
              element={
                <>
                  <GameWarpDetails /> <ScrollToTopButton />
                </>
              }
            />
            <Route
              path="/projects/smartforms"
              element={
                <>
                  <SmartFormsDetails /> <ScrollToTopButton />
                </>
              }
            />
            <Route
              path="/projects/handy"
              element={
                <>
                  <HandyDetails /> <ScrollToTopButton />
                </>
              }
            />
            <Route
              path="/projects/turboevents"
              element={
                <>
                  <TurboEventsDetails /> <ScrollToTopButton />
                </>
              }
            />
            <Route
              path="/projects/omr-manager"
              element={
                <>
                  <OmrManagerDetails /> <ScrollToTopButton />
                </>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
