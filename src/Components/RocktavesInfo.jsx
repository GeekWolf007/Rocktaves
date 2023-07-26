import React , {useState , useEffect , useRef} from "react";
import "./RocktavesInfo.css"
import MusicBand from "../assets/MusicBand.svg"
import "../Fonts/MetalVengeance/MetalVengeance.ttf";
const RocktavesInfo = () =>{
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
    <section className="whatIsRocktavesContainer" ref={observerRef}>
      <h1 className="whatIsRocktavesHeading">WHAT IS ROCKTAVES</h1>
      <div className="horizontalLine"></div>
      <p style={{
          transform: isLoaded ? "translateX(0rem)" : "translateX(-5rem)",
          opacity: isLoaded ? 1 : 0,
          transition: "transform 1s ease-out, opacity 1s ease-out"
        }}
      className="whatIsRocktavesPara">Rocktaves is one of the oldest semi-professional rock band competitions in India which has acted as a propeller for India’s premiere rock groups of the stature of <span className="whatIsRocktavesParaSpan">Parikrama</span>, <span className="whatIsRocktavesParaSpan">Indian Ocean</span>, <span className="whatIsRocktavesParaSpan">Superfuzz</span>, <span className="whatIsRocktavesParaSpan">Prestorika</span>, <span className="whatIsRocktavesParaSpan">Them Clones</span> and <span className="whatIsRocktavesParaSpan">Euphoria</span> who have taken part in the competition at different points in its history.</p>
      <img src={MusicBand} className="musicBand" alt="" />
    </section>
  );
};

export default RocktavesInfo;

