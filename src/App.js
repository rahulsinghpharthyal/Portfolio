import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Certificates from "./components/Certificates";

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-gradient-to-b from-gray-900 to-gray-900">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Certificates/>
        <Contact />
        <SocialLinks />
      </div>
    </BrowserRouter>
  );
}

export default App;
