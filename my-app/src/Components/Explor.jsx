import React from "react";
import "../styles/Explor.css";

const Explor = () => {
  return (
    <div className="explor">
      <h1 className="explor__heading">Explore Diverse Mentorship Areas </h1>
      <div className="explore__matter">

        <div className="explore_one">
          <h1> Business and Entrepreneurship </h1>
          <p style={{color:"#1E1E1E"}} >
            Dive into the world of business and entrepreneurship. Our mentors in
            this area can provide valuable insights on topics like business
            strategy, marketing, finance, startups, leadership, and innovation
          </p>
          <h2 >Read More  <span style={{color:"#00A896"}}>&#8594;</span> </h2>
        </div>

        <div className="explore_Two">
          <h1>Arts and Creativity </h1>
          <p style={{color:"#1E1E1E"}}>
            Unleash your creative potential with our mentors in the arts and
            creativity. Whether you're passionate about visual arts, writing,
            music, photography, or performing arts, our mentors can provide you
            with the necessary guidance and inspiration.
          </p>
          <h2 >Read More <span style={{color:"#00A896"}}>&#8594;</span></h2>
        </div>

        <div className="explore_Three">
          <h1>Technology </h1>
          <p style={{color:"#1E1E1E"}} >
            Enhance your skills in the ever-evolving field of technology. Our
            technology mentors can guide you in areas such as software
            development, web design, data science, cybersecurity, artificial
            intelligence, and more
          </p>
          <h2 >Read More <span style={{color:"#00A896"}}>&#8594;</span> </h2>
        </div>
      </div>
      <button className="Explor_button">Find Your Mentor <span style={{color:"#00A896"}}>&#8594;</span> </button>

    </div>
  );
};

export default Explor;
