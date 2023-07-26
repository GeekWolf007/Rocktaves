import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import guy from "../assets/guy.png";

const Register = ({goToForm}) =>{
  return(
    <section className="registerSection">
      <Link to="/form">
      <div className="scroll text1" onClick={goToForm}>
        <div>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
        </div>
        <div>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
        </div>
      </div>
      </Link>
      <Link to="/form">
      <div className="scroll text2" onClick={goToForm}>
      <div>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
        </div>
        <div>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
          OASIS-ROCKTAVES -<span>REGISTER NOW - </span>
        </div>
      </div>
      </Link>
      <img src={guy} alt="" className="registerImg" />
    </section>
  );
};

export default Register;