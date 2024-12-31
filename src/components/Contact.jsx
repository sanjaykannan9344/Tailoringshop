import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>
        Email:{" "}
        <a href="mailto:info@tailoringshop.com">info@tailoringshop.com</a>
      </p>
      <p>
        Phone:<a href="tel:+123 456 7890"> +123 456 7890</a>
      </p>
      <p>
        Address: <Link to="/Map">123 Tailor St, Fashion City</Link>
      </p>
    </div>
  );
};

export default Contact;
