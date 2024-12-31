import React from "react";

const Map = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Our Location</h2>
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509494!2d77.667583!3d13.0135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNew%20Location!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus
"
        width="100%"
        height="300"
        allowFullScreen=""
        loading="lazy"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default Map;
