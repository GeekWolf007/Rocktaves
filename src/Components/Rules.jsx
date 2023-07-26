import React , {useState , useEffect , useRef} from "react";
import "./Rules.css";
import "../Fonts/MetalVengeance/MetalVengeance.ttf";
const Rules = () =>{
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
    <section className="rulesContainer" ref={observerRef}>
      <h1 className="rulesHeading">RULES</h1>
      <div className="horizontalLine"></div>
      <p style={{
          transform: isLoaded ? "translateX(0rem)" : "translateX(5rem)",
          opacity: isLoaded ? 1 : 0,
          transition: "transform 1s ease-out, opacity 1s ease-out"
        }} 
       className="rulesPara">1.) Bands must submit a link to a <span className="rulesParaSpan">3-5 minute</span> live recording of one their works.</p>
      <p style={{
          transform: isLoaded ? "translateX(0rem)" : "translateX(5rem)",
          opacity: isLoaded ? 1 : 0,
          transition: "transform 1s ease-out, opacity 1s ease-out"
        }} 
       className="rulesPara">2.) Only <span className="rulesParaSpan">Original Compositions</span> are allowed as submissions.</p>
      <p style={{
          transform: isLoaded ? "translateX(0rem)" : "translateX(5rem)",
          opacity: isLoaded ? 1 : 0,
          transition: "transform 1s ease-out, opacity 1s ease-out"
        }} 
       className="rulesPara">3.) Bands based in cities where physical preliminary rounds are being hosted are <span className="rulesParaSpan">not allowed</span> to register for the <span className="rulesParaSpan">online round</span>.</p>
      <p style={{
          transform: isLoaded ? "translateX(0rem)" : "translateX(5rem)",
          opacity: isLoaded ? 1 : 0,
          transition: "transform 1s ease-out, opacity 1s ease-out"
        }} 
       className="rulesPara">4.) Separate communication regarding the additional submission for the online round will be relayed to those bands who will be participating in the online preliminary round.</p>
    </section>
  );
};

export default Rules;

