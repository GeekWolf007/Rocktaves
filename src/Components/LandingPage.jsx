import React from "react";
import "./LandingPage.css"
import Heading from "./Heading";
import Register from "./Register";

const LandingPage = () =>{
  return (
    <div className="landingPageWrapper">
      <div className="headingWrapper">
        <Heading />
        <Register />
      </div>
    </div>
  )
}

export default LandingPage;