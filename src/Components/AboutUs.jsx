import React , { useState , useEffect , useRef } from "react";
import "./AboutUs.css";
import "../Fonts/MetalVengeance/MetalVengeance.ttf";
const AboutUs = () =>{
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef(null);
  useEffect(() => {
    const onIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersection, {
      threshold: 0.5, 
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return(
    <section className="aboutUsContainer" ref={observerRef} >
      <h1 className="aboutUsHeading">About Us</h1>
      <div className="horizontalLine2"></div>
      <div className="paraContainer">
        {/* <p className="aboutUsPara"
         style={{
          transform: isLoaded ? "translateX(0rem)" : "translateX(-5rem)",
          opacity: isLoaded ? 1 : 0,
          transition: "transform 1s ease-out, opacity 1s ease-out"
        }}
        ><span className="aboutUsParaSpan">Rocktaves</span> is organised by The <span className="aboutUsParaSpan">Association Of Rock, BITS Pilani (ARBITS)</span>. We are a group dedicated to fostering the growth of the <span className="aboutUsParaSpan">Indian music</span> scene amongst our students and we aspire to uplift it in any way possible. ARBITS began as a club with the initial purpose being to organize and conduct Rocktaves, the oldest semi-professional electro-band competition in India, and Rocktaves has been a great launch pad for budding talent in the past, with winners receiving cash prizes upwards of a lakh and a half. This year, we plan to return with better prizes and a better Rocktaves experience for every party involved.</p> */}
        <p className="aboutUsPara"
         style={{
           transform: isLoaded ? "translateX(0rem)" : "translateX(-5rem)",
           opacity: isLoaded ? 1 : 0,
           transition: "transform 1s ease-out, opacity 1s ease-out"
          }}
        ><span className="aboutUsParaSpan">Rocktaves</span> is organized by the <span className="aboutUsParaSpan">Association Of Rock, BITS Pilani (ARBITS)</span>. Our goal is to foster and uplift the <span className="aboutUsParaSpan">Indian music</span>  scene and promote it in the university amongst the student body. ARBITS began as a club with the initial goal of organising and conducting Rocktaves, the oldest semi-professional electro-band competition in India. Rocktaves has been a great launch pad for budding artists in the past, with winners receiving cash prizes worth one lakh upwards. This year, we plan to return with Better prizes and an unforgettable <span className="aboutUsParaSpan">Rocktaves Experience!</span></p>
      <p className="aboutUsPara textaligncenter"><span className="aboutUsParaSpan">Stay Tuned!</span></p>
      </div>
    </section>
  );
};

export default AboutUs;

