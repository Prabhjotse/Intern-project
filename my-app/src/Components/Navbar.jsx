import React from "react";
import image1 from "../assessts/image1.jpg";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar__image" src={image1} />
      <div className="navbar__Heading">
        <li className="navbar__li">
          <ul className="navbar__ul">Home</ul>
          <ul className="navbar__ul">About </ul>
          <ul className="navbar__ul">Mentors</ul>
          <ul className="navbar__ul">Session</ul>
        </li>
      </div>

      <div className="navbar__button">
        
        <button className="navbar_button__text">Sing Up</button>
      </div>
    </div>
  );
};

export default Navbar;
