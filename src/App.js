import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import { Education } from "./components/Education";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Nav from './components/Nav';
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="text-gray-900 bg-slate-50">
      <Nav/>
      <Jumbo />
      <About/>
      <Skills />
      <Projects />
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
