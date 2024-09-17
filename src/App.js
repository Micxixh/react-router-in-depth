import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//pages
import Home from "./pages/home";
import About from "./pages/about";
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
