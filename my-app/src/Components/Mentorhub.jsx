import React from "react";
import image3 from "../assessts/image3.jpg";
import "../styles/Mentorhub.css"

const Mentorhub = () => {
  return (
    <div className="mentorhub">
      <div className="mentorhub__left">
        <h1 className="heading">At Mentor Hub</h1>
        <p className="mentorhub_para">
          we believe in the power of mentorship. We provide a platform where
          passionate individuals like you can share your expertise and make a
          positive impact on others. Whether you're an experienced professional,
          an industry expert, or a seasoned entrepreneur, Mentor Hub offers you
          the opportunity to connect with mentees, guide them on their journey,
          and shape their future.
        </p>
        
    
    
        <button className="mentorhub_button">Learn More <span style={{color:"#00A896"}}>&#8594;</span> </button>
      </div>
      
        <img className="image" src={image3}  />
    
    </div>
  );
};

export default Mentorhub;
