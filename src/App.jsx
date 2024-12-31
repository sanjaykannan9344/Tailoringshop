import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Services from "./components/Services";
import Map from "./components/Map";
import Contact from "./components/Contact";
import Header from "./components/Header";
import QRCodeComponent from "./components/QRCode";

const App = () => {
  return (
    <>
      <div>
        <ul className="flex space-x-6">
          <li>
            <img src="/favicon.ico" className="w-10 ml-80 " />
          </li>
          <li className="mr-64 font-extrabold bg-gradient-to-r from-purple-600 to-purple-950 bg-clip-text text-transparent ">
            <p>Tailoring shop</p>
          </li>
        </ul>

        <div className="border-4 border-double border-cyan-400 ">
          <Header />
        </div>
        <Router>
          <Menu /> {/* Navbar is always displayed */}
          <div className="p-6">
            <Routes>
              <Route path="/services" element={<Services />} />
              <Route path="/map" element={<Map />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/home" element={<QRCodeComponent />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
