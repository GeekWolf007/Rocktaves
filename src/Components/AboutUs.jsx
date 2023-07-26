import React from "react";
import "./AboutUs.css";
import "../Fonts/MetalVengeance/MetalVengeance.ttf";
const AboutUs = () =>{

  return(
    <section className="aboutUsContainer">
      <h1 className="aboutUsHeading">About Us</h1>
      <div className="horizontalLine2"></div>
      <div className="paraContainer">
        <p className="aboutUsPara"><span className="aboutUsParaSpan">Rocktaves</span> is organised by The <span className="aboutUsParaSpan">Association Of Rock, BITS Pilani (ARBITS)</span>. We are a group dedicated to fostering the growth of the <span className="aboutUsParaSpan">Indian music</span> scene amongst our students and we aspire to uplift it in any way possible. ARBITS began as a club with the initial purpose being to organize and conduct Rocktaves, the oldest semi-professional electro-band competition in India, and Rocktaves has been a great launch pad for budding talent in the past, with winners receiving cash prizes upwards of a lakh and a half. This year, we plan to return with better prizes and a better Rocktaves experience for every party involved.</p>
        <p className="aboutUsPara textaligncenter"><span className="aboutUsParaSpan">Stay Tuned!</span></p>
      </div>
    </section>
  );
};

export default AboutUs;

