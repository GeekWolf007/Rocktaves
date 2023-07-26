import React from "react";
import "./LandingPage.css"
import Heading from "./Heading";
import Register from "./Register";
import RocktavesInfo from "./RocktavesInfo";
import Rules from "./Rules";
import PastWinners from "./PastWinners";
import AboutUs from "./AboutUs";
import Timeline from "./Timeline";

const LandingPage = ({goToForm}) =>{
  return (
    <div className="landingPageWrapper">
      <section className="headingWrapper">
        <div className="fixedBG"></div>
        <Heading />
      </section>
      <RocktavesInfo />
      <Rules />
      <Timeline />
      <PastWinners 
        Heading={true}
        First = {"INIDAN OCEAN"}
        Second = {"PARIKRAMA"}
      />
      <PastWinners 
        Heading={false}
        First = {"PRESTORIKA"}
        Second = {"THEM CLONES"}
      />
      <AboutUs />
      <Register />
    </div>
  )
}

export default LandingPage;
