import React from 'react';
import NavBar from "./Components/ui/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home"
import { Javascript } from "./Components/Pages/Javascript";
import { Python } from "./Components/Pages/Python";
import  ContactUs  from "./Components/Pages/ContactUs";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <NavBar />
          <div className="pages">
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path="/javascript" element={<Javascript />} />
              <Route path="/python" element={<Python />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
        </Router>
      </>
    </div>
  );
}

export default App;
