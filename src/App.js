import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//pages
import Home from "./home";
import About from "./about";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <route path = "/" element= {<Home />} />
          <route path = "about" element= {<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
