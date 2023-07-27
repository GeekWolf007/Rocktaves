import React,{useState,useEffect} from 'react';
import "./Timeline.css";

const Timeline = () =>{

  const [scrollPosition, setScrollPosition] = useState(0);
  const [step1, showStep1] = useState(false);
  const [step2, showStep2] = useState(false);
  const [step3, showStep3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition =
      window.scrollY - document.getElementsByClassName("timelineContainer")[0].offsetTop + 0.3 * window.innerHeight;
      const defaultHeight = document.getElementsByClassName("default-line")[0].offsetHeight - 50;

    setScrollPosition(currentPosition);

    if (currentPosition > 0 && currentPosition <= (defaultHeight/3)) {
      showStep1(true);
      showStep2(false);
      showStep3(false);
    } else if (currentPosition > (defaultHeight/3) && currentPosition <= (defaultHeight/1.5)) {
      showStep1(true);
      showStep2(true);
      showStep3(false);
    } else if (currentPosition > (defaultHeight/1.5)) {
      showStep1(true);
      showStep2(true);
      showStep3(true);
    }
    };

    document.getElementById("card").onmousemove = e =>{
      for(const card of document.getElementsByClassName("cards")){
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
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
            <span className="default-line"></span>
            <span className="draw-line" style={{ height: `${scrollPosition}px` }}></span>
          </div>
          <div id="card" >
            {<div className="cards step1" style={{
              transform: step1 ? "translateX(0rem)" : "translateX(5rem)",
              opacity: step1 ? 1 : 0,
              transition: "transform 1s ease-out, opacity 1s ease-out"
            }}>
              <div className="card-border"></div>
              <div className="card-content">
                <h3>STEP 1: <span>REGISTRATIONS</span></h3>
                <p>Bands will register on the website and will be notified of the time and place of the venue and date of the preliminary round in their respective city. For online participants, the communication regarding the submission will be done separately.</p>
              </div>
            </div>}
            {<div className="cards" style={{
              transform: step2 ? "translateX(0rem)" : "translateX(5rem)",
              opacity: step2 ? 1 : 0,
              transition: "transform 1s ease-out, opacity 1s ease-out"
            }}> 
              <div className="card-border"></div>
              <div className="card-content">
              <h3>STEP 2: <span>PRELIMINARY ROUNDS</span></h3>
                <p>Each band will be expected to perform live for 15-20 minutes at their respective city's venue. One winner from each city and one from each of the two online divisions will qualify for the final round which will be at BITS Pilani. There will be prizes for both winner and runner up at each city's preliminary round.</p>
              </div>
            </div>}
            {<div className="cards" style={{
              transform: step3 ? "translateX(0rem)" : "translateX(5rem)",
              opacity: step3 ? 1 : 0,
              transition: "transform 1s ease-out, opacity 1s ease-out"
            }}>
              <div className="card-border"></div>
              <div className="card-content">
                <h3>STEP 3: <span>Finals at OASIS '23</span></h3>
                <p>The qualifying bands will be invited to play at OASIS, the cultural fest of BITS Pilani and the winning band will walk away with the title of the Rocktaves winner at the 51st OASIS along with the prizes which will be revealed shortly. The rules for the same will be shared in due time.</p>
              </div>
            </div>}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
};

export default Timeline;