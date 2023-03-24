import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Features from "./Features";
import Coverage from "./Coverage";
import Packages from "./Packages";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from './Footer';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar/>
  <Routes>
        
      <Route exact path = "/" element={<Home />} />
      <Route exact path = "/Features" element={<Features />} />
      <Route exact path = "/Coverage" element={<Coverage />} />
            <Route exact path = "/Packages" element={<Packages />} />
      <Route exact path = "/contact" element={<Contact />} />
    
     </Routes>
     <Footer/>

   </>
  )
}

export default App
