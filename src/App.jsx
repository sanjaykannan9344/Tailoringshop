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
        <ul className="flex space-x-6 justify-center">
          <li>
            <img src="/favicon.ico" className="w-10 " />
          </li>
          <li className=" font-extrabold text-xl bg-gradient-to-b from-gray-500 to-purple-950 shadow-slate-100 bg-clip-text text-transparent ">
            <p>Tailoring shop</p>
          </li>
        </ul>

        <div className="border-4 border-double border-black ">
          <Header />
        </div>
        <Router>
          <Menu /> {/* Navbar is always displayed */}
          <div className="p-6 ">
            <Routes>
              {/* <Routes path="/" element={<Backbutton />} /> */}
              <Route path="/services" element={<Services />} />
              <Route path="/map" element={<Map />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/qr" element={<QRCodeComponent />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
