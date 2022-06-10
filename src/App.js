import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
