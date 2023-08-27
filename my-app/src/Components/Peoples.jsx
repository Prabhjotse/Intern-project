import React from "react";
import "../styles/Peoples.css";
import image5 from "../assessts/image5.jpg";
import image6 from "../assessts/image6.jpg";
import image7 from "../assessts/image7.jpg";

const Peoples = () => {
  return (
    <div className="peoples">
      <h1> Hear from Our Mentors</h1>

      <div className="peoples__persons">
        <div className="peoples_one">
          <div className="person">
            <img src={image5} />
            <h1>
              Malini sindhu <br /> <span style={{color:"#00A896" , fontSize:'23px'}}> chennai , INDIA</span>
            </h1>
          </div>
          <div className="im">
            <p>
              "Being a mentor on Mentor Hub has <br /> been an incredibly
              rewarding <br />
              experience. I've had the opportunity to <br />
              share my knowledge and guide <br /> aspiring professionals in
              their career <br /> journeys.”
            </p>
          </div>
        </div>

        <div className="peoples_one">
          <div className="person">
            <img src={image6} />
            <h1>
            Archana Nair <br />  <span style={{color:"#00A896" , fontSize:'23px'}} > Kerala ,INDIA</span>
            </h1>
          </div>
          <div className="im">
            <p>
            "Mentor Hub has exceeded my <br />
             expectations. The platform's user- <br /> 
             friendly design and comprehensive <br />
              profile customization options have <br /> 
              allowed me to showcase my expertise <br />
               and build credibility with mentees”.
            </p>
          </div>
        </div>


        <div className="peoples_one">
          <div className="person">
            <img src={image7} />
            <h1>
            Deepak Dinesh <br /><span style={{color:"#00A896" , fontSize:'23px'}}> chennai , INDIA</span>
            </h1>
          </div>
          <div className="im">
            <p>
            "As a mentor on Mentor Hub, I've <br /> been able to
             connect with mentees <br /> from around the world, 
             bridging <br /> geographical boundaries. The <br /> platform's
              robust search functionality <br /> and categorization have 
              made it easy <br /> for mentees to find me based on their <br />
               specific needs.”
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Peoples;
