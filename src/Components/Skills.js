import React from "react";
import image1 from "../Images/image1.jpeg";
import "./Skills.css"; // Make sure this path is correct

const Skills = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {[...Array(9).keys()].map((item) => (
            <div key={item} className="col-md-4">
              <div className="card custom-card" style={{width: "8rem", height:"10rem"}}>
                <img src={image1} className="card-img-top" alt="..." />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;