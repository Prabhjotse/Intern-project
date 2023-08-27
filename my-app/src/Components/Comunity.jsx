import React from "react";
import image4 from "../assessts/image4.jpg";
import "../styles/Comunity.css";

const Comunity = () => {
  return (
    <div className="comunity">
      <div className="comunity_left">
        <img src={image4} alt="" />
      </div>
      <div className="comunity_right">
        <h1> Join Our Community <br /> of Mentors</h1>
        <p>
          Becoming a mentor on Mentor Hub is quick <br /> and easy. Follow these simple
          steps to get <br /> started .
        </p>
        <button >Learn More <span style={{color:"#00A896"}}>&#8594;</span> </button>

      </div>
    </div>
  );
};

export default Comunity;
