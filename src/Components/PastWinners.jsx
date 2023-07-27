import React from "react";
import "./PastWinners.css"
import "../Fonts/MetalVengeance/MetalVengeance.ttf";
import indianocean from "../assets/indianocean.jpg";
import parikrama from "../assets/parikrama.jpg";
import prestorika from "../assets/prestorika.jpg";
import themclones from "../assets/themclones.jpg";
const PastWinners = ({Heading , First , Second}) =>{

  const windowWidth = window.innerWidth;
  const backgroundImage1 = windowWidth > 840 ? `url('${parikrama}') right center / contain no-repeat` : `url('${indianocean}') right center / contain no-repeat`;
  const backgroundImage2 = windowWidth > 840 ? `url('${indianocean}') left center / contain no-repeat` : `url('${parikrama}') right center / contain no-repeat`;
  const backgroundImage3 = windowWidth > 840 ? `url('${prestorika}') right center / contain no-repeat` : `url('${themclones}') right center / contain no-repeat`;
  const backgroundImage4 = windowWidth > 840 ? `url('${themclones}') left center / contain no-repeat` : `url('${prestorika}') right center / contain no-repeat`;
  return(
    <section className="pastWinnersContainer">
      {Heading && <h1 className="pastWinnersHeading">PAST WINNERS</h1>}
      {Heading && 
      <div className="firstTwoPastWinners pastWinners">
        <div className="pastWinner pastWinner1">
          <h3 className="winnerHeading">{First}</h3>
          <div className="winnerImg" style={{ background: backgroundImage1 }} />
        </div>
        <div className="pastWinner pastWinner4">
        <div className="winnerImg" style={{ background: backgroundImage2 }} />
          <h3 className="winnerHeading">{Second}</h3>
        </div>
      </div>}
      {!Heading && 
      <div className="secondTwoPastWinners pastWinners">
        <div className="pastWinner pastWinner4">
        <div className="winnerImg" style={{ background: backgroundImage3 }} />
          <h3 className="winnerHeading">{Second}</h3>
        </div>
        <div className="pastWinner pastWinner4" >
          <h3 className="winnerHeading">{First}</h3>
          <div className="winnerImg" style={{ background: backgroundImage4 }} />
        </div>
      </div>}
    </section>
  );
};

export default PastWinners;

