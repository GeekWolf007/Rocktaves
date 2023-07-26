import React, { useEffect, useState } from "react";
import "./Heading.css";
import { Link } from "react-router-dom";
import "../Fonts/MetalVengeance/MetalVengeance.ttf";

const Heading = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Link to="/form">
      <p
        className="rocktavesHeading"
        style={{
          transform: isLoaded ? "scale(1)" : "scale(0.4)",
          opacity: isLoaded ? 1 : 0,
          transition: "transform 1s ease-out, opacity 1s ease-out , scale 0.5s ease"
        }}
      >
        <span className="rocktavesHeadingSpan">ROCKTAVES</span>
        ROCKTAVES
        <span className="rocktavesHeadingSpan">ROCKTAVES</span>
      </p>
    </Link>
  );
};

export default Heading;
