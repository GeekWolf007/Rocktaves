import React from "react";
import "./PastWinners.css"
import "../Fonts/MetalVengeance/MetalVengeance.ttf";
import indianocean from "../assets/indianocean.jpg";
import parikrama from "../assets/parikrama.jpg";
import prestorika from "../assets/prestorika.jpg";
import themclones from "../assets/themclones.jpg";
const PastWinners = ({Heading , First , Second}) =>{

  return(
    <section className="pastWinnersContainer">
      {Heading && <h1 className="pastWinnersHeading">PAST WINNERS</h1>}
      {Heading && 
      <div className="firstTwoPastWinners pastWinners">
        <div className="pastWinner pastWinner1">
          <h3 className="winnerHeading">{First}</h3>
          <div className="winnerImg" style={{ background: `url('${indianocean}') center center / contain no-repeat` }} />
        </div>
        <div className="pastWinner pastWinner4">
          <div className="winnerImg" style={{ background: `url('${parikrama}') center center / contain no-repeat` }} />
          <h3 className="winnerHeading">{Second}</h3>
        </div>
      </div>}
      {!Heading && 
      <div className="secondTwoPastWinners pastWinners">
        <div className="pastWinner pastWinner4">
          <div className="winnerImg" style={{ background: `url('${prestorika}') center center / contain no-repeat` }} />
          <h3 className="winnerHeading">{Second}</h3>
        </div>
        <div className="pastWinner pastWinner4" >
          <h3 className="winnerHeading">{First}</h3>
          <div className="winnerImg" style={{ background: `url('${themclones}') center center / contain no-repeat` }} />
        </div>
      </div>}
    </section>
  );
};

export default PastWinners;

