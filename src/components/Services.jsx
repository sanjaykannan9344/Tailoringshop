import React from "react";
import { useState } from "react";
const Services = () => {
  const servicesList = [
    { name: "Custom Tailoring", image: "/custom.jpg" },
    { name: "Alterations", image: "/alter.jpg" },
    { name: "Suit Fitting", image: "/suit.jpg" },
    { name: "Repairs", image: "/repair.jpg" },
  ];
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <ul className="list-disc list-insiden flex flex-wrap justify-center gap-6">
        {servicesList.map((service, index) => (
          <li key={index} className="mb-2">
            <img
              src={service.image}
              alt={service.name}
              className={`w-24 h-24 object-cover mb-2 mx-auto border-4 border-slate-500 transition-transform duration-500 ease-in-out ${
                isHovered ? "scale-105" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <div className="flex justify-center">{service.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
