import React,{useState,useEffect} from 'react';
import "./Timeline.css";

const Timeline = () =>{

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition - document.getElementsByClassName("timelineContainer")[0].offsetTop + 0.3*window.innerHeight);
    };
    document.getElementById("cards").onmousemove = e => {
      for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
    
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return(
    <React.Fragment>
      <section className="timelineContainer">
        <h1 className="timelineHeading">TIMELINE</h1>
        <div className="timeline" id="cards" >
          <div className="progressBar">
            <span class="default-line"></span>
            <span class="draw-line" style={{ height: `${scrollPosition}px` }}></span>
          </div>
          <div id="card">
            <div className="cards">
              <div className="card-border"></div>
              <div className="card-content"></div>
            </div>
            <div className="cards">
              <div className="card-border"></div>
              <div className="card-content"></div>
            </div>
            <div className="cards">
              <div className="card-border"></div>
              <div className="card-content"></div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
};

export default Timeline;