import { createBrowserRouter, Routes, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import CareersLayout from "./Layouts/CareersLayout";

//pages
import Home from "./pages/home";
import About from "./pages/about";
import Faq from "./pages/faq";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound"
import Careers, { careersLoader } from "./pages/careers/careers"
import CareerDetails, { careerDetailsLoader } from "./pages/careers/careerDetails";
import CareersError from "./pages/careers/careers error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element= {<Home />} />
      <Route path = "about" element= {<About />} />

      <Route path="help" element= {<HelpLayout/>}>
        <Route path="faq" element= {<Faq />}/>
        <Route path="contact" element= {<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          errorElement={<CareersError/>}>
        </Route>

      </Route>
      

      {/* error page "*"= if no other path */}
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)

function App() {
  return (

    
        <RouterProvider router = {router}/>
          
  );
}

export default App
