import React from "react";
import image2 from "../assessts/image2.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home_left">
        <h1 className="home_heading">
          "Unlock your potential as a <br />
         <span style={{color:"#00487c", width:"500" }}>Mentor</span>  and empower <br /> others to thrive.
        </h1>

        <button className="home_button_one">
          Get Start as a Mentor{" "}
          <span style={{ color: "#00A896" }}>&#8594;</span>
        </button>
        <button className="home_button_two">
          Learn More <span style={{ color: "#00A896" }}>&#8594;</span>
        </button>
      </div>
      <div className="home right">
        <img className="home__image" src={image2} alt="" />
      </div>
    </div>
  );
};

export default Home;
