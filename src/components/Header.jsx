import { useState } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`transition-transform duration-300 ease-in-out ${
          isHovered ? "scale-105" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src="background.jpg" alt="background" />
      </div>
    </>
  );
}
