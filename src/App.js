import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="my-portfolio">
      <Navbar></Navbar>
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer></Footer>
      {/* <Routes><Route path="/project" element={<Projects></Projects>}></Route></Routes> */}
    </div>
  );
}

export default App;
