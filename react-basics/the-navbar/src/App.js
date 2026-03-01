import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div classname="App">
      <nav className="nav">
        <Link to="/" className="nav-tem">Homepage</Link>
        <Link to="/about-me" className="nav-tem">AboutMe</Link>
      </nav>
      <Routes>
        <Route path="/" element= {<Homepage/>} />
        <Route path="/about-me" element= {<AboutMe/>} />  
      </Routes>
    </div>
  );
}

export default App;
