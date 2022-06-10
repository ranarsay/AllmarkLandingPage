import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Contact />
      <Project />
      <Footer/>
      
    </div>
  );
}

export default App;
