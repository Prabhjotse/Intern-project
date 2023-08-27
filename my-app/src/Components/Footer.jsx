import React from 'react';
import "../styles/Footer.css"
import image1 from '../assessts/image1.jpg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_image">
            <img src={image1} alt="" />
            <h1 style={{marginTop:"200px" , marginLeft:"300px", fontSize:"small"}}> © 2023 Mentor Hub. All rights reserved. </h1>
            
        </div>
        <div className="footer_heading">
          
            <p style={{color:"#00487c", fontWeight:"700", fontSize:"22px", letterSpacing:"1%", marginTop:"40px"}}>Pages</p>
            <p style={{marginTop:"10px"}}>About Us</p>
            <p style={{marginTop:"10px"}}>Mentors</p>
            <p style={{marginTop:"10px"}} >Sessions</p>
            <p style={{marginTop:"10px"}}>Sinfn up</p>
            
          
        </div>

        <div className="footer_heading">
          
            <p style={{color:"#00487c", fontWeight:"700", fontSize:"22px", letterSpacing:"1%", marginTop:'40px'}} >Contact</p>
            <p>123 Main Street <br />City, State 12345</p>
            <p style={{marginTop:"30px"}}>contact@mentorhub.com</p>
            <p style={{marginTop:"20px"}}>123-456 -7890</p>
          
        </div>
      
    </div>
  );
}

export default Footer;
